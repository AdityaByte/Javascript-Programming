// Discussing more about the array in js.

const marvel_heroes = ["ironman", "thor", "captain america", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

//marvel_heroes.push(dc_heroes) // By push one array to another it doesn't add element as linearly it adds the another array to the next index.
console.log(marvel_heroes)

// For doing what you want there is an another method concat which concats the element of two different arrays.
// concat() method returns a new array without modifying the existing array.
const new_marvel_heroes = marvel_heroes.concat(dc_heroes)
console.log("Concat method :", new_marvel_heroes)

// Spread method - By this method you can concat the elements of two array.
const all_heroes = [...marvel_heroes, ...dc_heroes] // ... - spread operator
console.log("All Heroes :",all_heroes)

// Let we have an array like
const my_array = [1,2,3,[5,6],[7,[8,9]]] // We have to resolve this error linearly 
// Note - It better to satisfy the flat level without being passing Infinity to it.
console.log(my_array.flat(Infinity)) // Here in the parameter we have to specify from which level we have to make it flat.


// Now talking about Array.methods
console.log(Array.isArray("Aditya")) // By this we can check that it is an array or not.
// Array.from creates a shallow copy from an iterable like object.
console.log(Array.from("Aditya")) // Here it creates an array through an iterable object.

const arr = [1,2,3,4,5]
// Syntax : Array.from(iterable_element, map_function)
const newArr = Array.from(arr, (x) => x+x)
console.log(newArr)

// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of("aditya", "sourabh", "lakshya", "urvish"))