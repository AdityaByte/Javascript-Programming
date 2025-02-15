// Functions in js.
// Function are simply block of code used to perform a specific task and we can use multiple copies of a function.

function printMyName(name) { // name is a parameter
    const charArray = Array.from(name.toUpperCase())
    charArray.forEach(function(element){
        console.log(element)
    })
}

// printMyName // This is just the reference of the function.
printMyName("aditya") // "aditya" is an argument

// Making another simple function which just return out a value

function addTwoNumbers(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 != "number") {
        console.log("Not a number pass a number")
        return
    }
    return number1 + number2
}

const result = addTwoNumbers(4, 1)
console.log(result);