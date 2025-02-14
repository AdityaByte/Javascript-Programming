// Objects in js - most important
/**
 * We can create an object in js through two ways-
 * 1. literal - by using object literal. Singleton nhi bnta hai isme
 * 2. Constructor - Singleton object is created by constructor.
 * -> Object has keys and value.
 * -> Access value through key.
 */

// Object.create - singelton - via constructor.

// Creating a Symbol
const mySym = Symbol("key1")

// Note - If you want to use symbol as a key then you have to use bracket []

// Below object is object literal - non singelton.
const user = {
    name: "aditya", // By default the system process the name as "name"
    "full name": "aditya pawar",
    age: 20,
    location: "san franciso",
    email: "aditya@js.dev",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "this is symbol"
}

// We can access the object in js through two ways-
/**
 * 1. ObjectName.keyName
 * 2. ObjectName["keyName"] // When key is like this ex. "full name"
 */

console.log(user.email)
console.log(user["full name"])
// console.log(typeof user.mySym) // This is string not symbol
console.log(user[mySym]) // Now this is a symbol
console.log(typeof user[mySym])

user.email = "aditya@google.dev"
// If you want to don't change the value after creation then you can freeze the object.
// Object.freeze(user)
user.email = "aditya.@golang.dev"

console.log(user["email"])
console.log(user)

// In js function can be treat as a variable
user.greeting = function() {
    console.log("Hello js user")
}

// Note : this["full name"] also valid.
user.greetingTwo = function() {
    console.log(`Hello js user, ${this.name} `) // If you want to reference the same object you can use the this keyword.
}

console.log(user.greeting());
console.log(user.greetingTwo());
