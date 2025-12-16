/*
CLOSURE:
Simpler terms: Function + Lexical scope is closure.
A closure is a combination of a function bundled together (enclosed) with references to its
surrounding state (the lexical environment).
*/

// Example.

function outer(name) {
    function inner() {
        console.log(`Hello, ${name}`)
    }

    return inner
}

inner = outer("Aditya")
inner()

/*
In the above example there were two functions one defined inside other.
So the inner function has the access the outer function variable since
when we call the outer function it started the execution and after finishing the execution
it returns the reference to the inner function which has still access of the outer function
varaibles or lexical scoped variables in which the function is been defined
so the closure is the inner() function.

Hope you understand what is closure and why we use it.
NOTE: A closure is been created every time we created a function in js.
*/