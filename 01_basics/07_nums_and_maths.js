// Number and number methods in js.

const score = "100"
const anotherScore = 20
// Here in the above two datatypes js dont explicitly tell you that these two datatypes are different.
console.log(score + anotherScore) 
// Another way of handling that you can make number as object and tell that the input value must be a number.

const newScore = new Number("100") // Anything written inside that is explicitly convert to a number datatype.
const anotherNewScore = 30
console.log(newScore + anotherNewScore) 


const balance = new Number(10000000); // When we create as this js create an object in the heap memory so when we paste
// -- out the thing to the browser console then it gives a prototype that has some methods that we can applied to the number.
console.log(balance.__proto__)

// If i want to write the number as hunderds thousands term so we can do that using this methods
console.log(balance.toLocaleString())
console.log(balance.toLocaleString("en-IN")) // In indian standards | But it convert the number to string as the name say.

// Like we have a number 
const repoCount = 15.450
// Here we have to method for precision
console.log(repoCount.toPrecision(3)) // We have to pass argument from which term i have to take the precision.
console.log(typeof repoCount.toString()) // It converts the number to a string.

// Now we are going to discuss about Maths in js.

const math = Math
console.log(math.__proto__) 

let ekAurNumber = -120
// Here we have some math methods that we can use for performing math operations on a number.
console.log(Math.abs(ekAurNumber)) // It gives the absolute value - always a positive value.

ekAurNumber = 12.6212
console.log(Math.round(ekAurNumber)) // Math.round method for rounding the number to the nearest integer.
// If you want to consider the lesser value while rounding you can use floor.
console.log(Math.floor(ekAurNumber))
// If you want to consider the greater value while rounding off to the nearest integer you can use ceil.
console.log(Math.ceil(ekAurNumber))

// Here we have a list of number
const numberList = [1,2,3,4,5,6,7]
console.log(Math.min(...numberList)) // For finding out the minimum value from a list.
console.log(Math.max(...numberList)) // For finding out the maximum value from a list.

console.log(Math.sqrt(2))

// Now the main thing comes Math.random

const start = 10;
const end = 20;

// Note - Math.random() gives a number number in between 0 to 1
console.log(Math.floor((Math.random() * 10) + 1) + 10)