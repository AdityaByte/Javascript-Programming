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

function showData(data= "i dont know") {
    return `data is ${data}`
}

newResult = showData("hello world")

console.log(newResult)

// Varargs in js - If we don't know how many arguments are coming then how can we handle them

function varArgs(...values) { // In this case ... is called rest operator.
    // ...values store the values in the array.
    for(let i=0; i<values.length; i++) {
        console.log(values[i])
    }
}

varArgs("aditya", "abhinav", "lakshya", "ashwin")

const user = {
    username: "aditya",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 899
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    console.log(getArray[1])
}

returnSecondValue(myNewArray)
returnSecondValue([1,2,3,4,5])