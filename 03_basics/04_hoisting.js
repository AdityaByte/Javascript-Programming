// In this file we are learning about hoisting in js.

/* Hoisting:
    Hoisting in javascript refers to the behavior of the interpreter moves the declarations of variables,
    functions and classess to the top of their scope before code execution.

    This means you can sometimes use a function or variable before it’s actually written in the code
    depending on how its declared.
*/

// Let us take an example.
// Firstly we are creating a variable using these three keywords and let
// us see how js behave the both the three cases.

// 1. `var` keyword
console.log(name);
var name = "aditya";
/* What actually happens behind the scene when we run this above code.
Step 1: Memory allocation: Js interpreter scans the whole file and allocates memory to variables and functions.
Step 2: Code execution: From Top to Bottom.
Here in this case when the interpreter scans the whole code it do firstly move the declaration of the variable
name at the top level and in the case of `var` it initializes it with undefined.

so the code would like this -
var name = undefined;
console.log(name)
name = "aditya"

Output: undefined.
*/

// 2. `let` keyword.
// console.log(course); // uncomment this if wanna check.
let course = "btech";
/* What actually happens when the second case runs -
Step 1: Memory allocation: Js interpreter scans the whole code and allocates memory to variables and functions also hoisting
has been done and in case of let and const the variable declartion are in the Temporal Dead Zone not initialized.
Step 2: Code Execution.

so when the second code runs this would happens
```TDZ
let course; \\ Not initialized.
```
console.log(course);
course = "btech"

Output: Reference error cause the course is not initialized so that no course attribute has been exists.
ReferenceError: Cannot access 'course' before initialization
*/

// Same would happens with the const.

// 4. Now we are doing it with the function defination.
// Hoisting.
// We do using a function before creating it in simple words we are declaring it afterwards.
console.log(func());
function func() {
    return "Hello world";
}
/* What would actually happens when the 4th code function above one.
Step 1: Hoisting happens like the variable declaration and the function declaration are at the top.
Step 2: Code execution.

So this would look like this -
function func() {
    return "Hello world";
}
console.log(func());

Output: Hello world
*/


// 5. Doing the same hoisting example with an arrow function.
console.log(anotherFunc("Aditya"));
const anotherFunc = (greet) => `Hello ${greet}!`;
/*
Now the problem with the above code is that -
It will also throws the ReferenceError because of the temporal Dead Zone concept.
Behind the scene:
Note: Variable declarations are at the top.
// Callback function is in the variable too.
```TDZ
const anotherFunc; // Not initialized yet.
```
console.log(anotherFunc);
anotherFunc = (greet) => something...;

Output: ReferenceError: Cannot access 'anotherFunc' before initialization.
*/

