// Set Interval in js.
// It sets out a interval after the defined time and runs the function each time till we clear the interval.
// It takes the third argument too by which we can pass any value to the function too.
// These all are async code they don't execute on the main thread.

const printTime = (str) => {
    console.log(`${str} -> ${Date.now()}`)
}

setInterval(printTime, 1000, "Date")