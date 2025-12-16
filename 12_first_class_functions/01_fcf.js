/*
First Class Functions:
A programming language is said to have first class function when the functions in that
language are treated like any other variable.

Things the function should do:
1. Function can be assigned to a variable. (like variables.)
2. Functions can be passed as an argument to another functions.
3. Functions can be retured from a function.
4. Stored in a data structure.

If in a programming language the function do follows these things then it is a first class member.

JS has first class functions like
*/


// 1. Can be Assigned to a variable like a value.
function greet() {
    console.log("Hello There!");
}

g = greet
console.log(g) // Treating functions as any other variable can be assigned to a variable.

// 2. Passing as an argument to another function.
function square(x) {return x*x}
function do_operation(fn, list) {
    list.map(x => {
        console.log(`The square of ${x} is ${fn(x)}`)
    })
}
// Calling the do_operation function and pass square function as argument.
do_operation(square, [1,3,4,5,6])

// 3. Returning a function.
// This example we have seen in the closure topic.
function init() {
    let count = 0;
    function next() {
        count++;
        return count;
    }

    return next; // returning the reference of the next function by a function.
}

// Calling the init function.
count = init()
console.log(count())
console.log(count())

// 4. Storing to a datastructure like in an object.
let my_object = {
    name: null,
    age: null,
    greet: function() {console.log(`My name is ${this.name} and age is ${this.age}`)}
}

obj = my_object
obj.name = "aditya"
obj.age = 21
obj.greet()
