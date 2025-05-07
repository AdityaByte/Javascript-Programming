// Promises in js.
// A Promise is a JavaScript object that represents something that will finish later—either successfully with a result, or with an error if something goes wrong.
// Promises is an object representing the eventual completion.
// Using new keyword we get the new instance of an object.

// Creating a Promise:
// Two case will happens:
// -> Promise will resolved or the Promise will rejects.
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cyptography, network calls.
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // We have to call this method for connecting with the .then method.
    } , 1000)
})

// Consuming the promise:
// .then has the direct relationship with the resolve.
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
})
.then(()=>{
    console.log("Async 2 resolved");
})


// Third promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // You can pass data to the paramter also.
        // Data could be anything array, string, number but try to pass object.
        resolve({username: "aditya", email: "cybergeek@gmail.com"})
    } , 1000)
})

promiseThree.then((data)=>{
    console.log(data);
})

// Fourth promise
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username: "aditya", password: "pwd"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}) // The value returned from the above .then came to the below .then
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.error(error)
})
.finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({course: "Master concurrency with golang", price: "$89"})
        } else {
            reject("ERROR: Something went wrong! Try again later.")
        }
    }, 1000)
})

// Using the async await approach for resolving the promise.
/**
 * Async: It waits for a period so that the task has been done.
 * Await: By defining await keyword in front of a task it the async waits for that process.
 */

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Use Case:
// We will discuss it in fetch.
async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json() // This task also takes time so we have to wait for it also.

        console.log(data);
    } catch (error) {
        console.log("ERROR: ", error);
    }
}

getAllUsers()

const requestURL = "https://api.github.com/users/AdityaByte"

fetch(requestURL)
.then((response)=>{
    return response.json()
})
.then((jsonResponse)=>{
    console.log(jsonResponse)
})
.catch((error)=>console.error(error))
.finally(()=>{
    console.log("Task has been done")
})