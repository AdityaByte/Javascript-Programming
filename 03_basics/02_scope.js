/** In js let we have two variables of same name but one at 
 * global scope and the other is at block scope so they can 
 * exists.
 * Anything in the curly braces is a scope.
 */

let scopeVar = "Hi bro"

{
    // This is the scope in js.
    // It has it's own limitation that we can access the global scope 
    // Variables at the block scope but vice versa is not possible.

    let scopeVar = "Heyo"

    console.log(scopeVar)
}

console.log(scopeVar)

// __________Interesting in js____________
// Mini hoisting in js.

console.log(addOne(10))
function addOne(num) {
    return num + 1
}

// console.log(addTwo(2)) // This will throw an error.
const addTwo = function(num) {
    return num + 2
}