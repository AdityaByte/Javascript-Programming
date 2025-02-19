// Learning about this keyword and arrow functions
/** This keyword - This keyword refers to the current context
 * Arrow function - Arrow functions are came in ES6 so in this their are two types 
 * 1. Implicit type and 2. Explicit type
 */

const obj1 = {
    username: "aditya",
    price: 233,
    showMessage: function() {
        console.log(`${this.username}, Good morning`)
        console.log(this) // Here the this refers to the current context that it was pointing to.
    }
}

obj1.showMessage()
obj1.username = "yeshank"
obj1.showMessage()

// As here if we prints out this here we are in the node environment so
console.log(this); // It prints out an empty string
// But if we prints out this in the browser environment then this will gives info about window.

// Note - We cannot use this keyword inside the function cause it gives undefined
const function1 = function() {
    let username = "aditya"
    console.log(this.username);
}

function1() // Prints undefined

// Arrow function 
const function2 = () => {
    let username = "adi"
    console.log(this.username);
}

function2() // Prints undefined

// Now talking about arrow functions.
// Arrow functions are just similar to the normal function we just remove the function keyword over that
const arrowFunction = (num1, num2) => {
    return num1 + num2
}
console.log(arrowFunction(12,12))

// We can implicitly write it as 
const arrowFunction1 = (num1) => ++num1 // It automatically returns the output
console.log(arrowFunction1(12))

// We can also place paranthesis out there.
const arrowFunction2 = (num1, num2) => (num1 - num2)
console.log(arrowFunction2(12,2))

// If we want to return an object then how can we....
const objectFunction = (username) => ({username: username})
console.log(objectFunction("aditya"))