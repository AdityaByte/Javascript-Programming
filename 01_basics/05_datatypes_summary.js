// In JS Datatypes are primiraly divided into two main types like other languages Java,Golang etc..
/*
1. Primitive Datatypes : Call by value datatypes | Stored in stack memory
2. Non-Primitive Datatypes : Call by reference datatypes | References are stored in stack and actual data is stored in heap.
*/

// Primitive Datatypes : string, number, null, undefined, bigint, symbol
// These are call by value cause they store the actual value in the stack
// For example : let name = "aditya"; If we are talking about string in js which is primitive so 
// When we copy name to another variable then the value got copied and it will make another variable with the same data 
// and any changes to the new variable does not reflect to the original one.


let name = "aditya";
let value = 10;
let nullData = null;
let undefinedThing;
let bigInteger = 12121212121212121212n;
// Symbol is a unique datatype
let symbolDatatype = Symbol("hello");
let symbolDatatype2 = Symbol("hello");

console.log(symbolDatatype === symbolDatatype2) // Returns false.

// Non-Primitive dataypes : Array, Object, Function
// Here in the non primitive case the stack store the reference and the actual data got stored in the heap
// for example : let arr = [1,2,3,4] so in stack : arr : 101(address to the heap memory) and in heap : 100 -> [array elements]
// So in this case when we copy the arr to another array then the actual refernce to the value which is stored in the heap
// got copied and any changes to the new variables reflects the original one.

let fruits = ["mango", "chiku", "dragonfuit"]

console.log(typeof fruits) // Returns object

const objectData = {
    name: "aditya",
    age: 20
}

console.log(typeof objectData); // Return object

const func = function() {
    console.log("hello world")
}

console.log(typeof func);  // Return function

// Stack and Heap memory
// Stack memory - Primitive datatypes
// Heap memory - non primitive datatypes

/*
All the primitive datatypes are stored in the stack memory and all the non primitive datatypes are stored in heap memory.
-> When we copy a data from the stack memory then the data got copied on the other hand in the heap memory the reference 
got copied. 
*/

let ras = "somrass";
let anotherRas = ras;

anotherRas = "Mangoras";

console.log(anotherRas);
console.log(ras);

// Datatypes that are stored in the heap memory
// Constants just prevent the reassignment but we can makes changes to the variable if it is immutable here the dict is mutable so it can be changed.

const studentInformation = {
    name: "aditya",
    course: "btech cse"
}

const anotherStudent = studentInformation;

anotherStudent.name = "yeshank"

console.log(studentInformation); // Data value got changed.