// Node don't have any library by which we can't stop the exeuction of the current thread.
// That's why we have created a sleep function which won't do anything in the time that we passed.
// Sleep function returns a promise that gets resolved after s seconds.
const sleep = (s) => {
    return new Promise(resolve => setTimeout(resolve, s*1000))
}

/**
 * p1, p2 and p3 are three async function (async function always resolved to promise)
 * In each function we are awaiting the functions to sleep for s seconds.
 * After that we are printing out the result.
 */

const p1 = async () => {
    await sleep(1)
    console.log("P1 resolved");
}

const p2 = async () => {
    await sleep(2)
    console.log("P2 resolved");
}

const p3 = async () => {
    await sleep(0.5)
    console.log("P3 resolved");
}

// Main function we are calling all the three function when we won't apply the await keyword
// to any of the function in that case all the functions were executed asynchronously.

async function main() {
    p1()
    p2()
    p3()
}

main()

/**
 * Explanation of the code:
 *
 * - sleep(s) returns a Promise that resolves after `s` seconds.
 *
 * - p1, p2, and p3 are async functions.
 *   Each function:
 *   - awaits its own sleep Promise
 *   - pauses execution of that function only
 *   - resumes after the Promise resolves and logs a message
 *
 * In the main() function:
 *
 * - `await p1()` pauses the execution of `main` until p1 completes.
 *   During this time, p2 and p3 are NOT started.
 *
 * - After p1 resolves, `p2()` and `p3()` are called WITHOUT `await`.
 *   This starts both functions immediately.
 *
 * - p2 and p3 run concurrently (not in parallel threads),
 *   meaning they are scheduled on the event loop and can complete in any order.
 *
 * - Since p3 has a shorter delay (0.5s), it resolves before p2 (2s).
 *
 * Important notes:
 * - `await` only pauses the current async function.
 * - JavaScript is single-threaded; concurrency is achieved via the event loop.
 * - Calling async functions without `await` starts them but does not block execution.
 */
