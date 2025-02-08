// Variables are used for holding out some data to a program
// Variables are the things whose value can be changed.
// In Javascript we can declare variables using the let, var, and nothing keywords.
// And we can declare a constant using a const keyword - const are those whose value cannot be changed after they defined.

//const contant1 // You can't do this cause when we declare a constant you have to initialize it in the same line


const accountId = 12345 // Its a constant
let accountEmail = "aditya@javascript.dev" // It is a variable 
var accountPassword = "adi123" // It is also a variable

/*
Prefer not to use var
because of block scope and functional scope.
*/

accountCity = "kinnaur" // You can declare a variable like this too

let accountState; // The default value if no value is assigned to a variable is undefined.

// accountId = 1232121 // This is not allowed.

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Here we declare a variable using the let and var too so why do js gives these two keywords.
// Var is the old way of defining the variables in js and let is the modern way for defining.
// The var is the depracated way cause it has some issues of scope and functional scope.
// let us take an example that we have two variables inside a scope.

{
    var name = "aditya"
    let name1 = "aditya"
}

console.log(name) // It runs well.
// console.log(name1) // This will give out an error we are excessing a variable beyond the scope in which it is defined.
