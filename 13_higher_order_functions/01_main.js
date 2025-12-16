/*
Higher Order functions:
This topic is being related to the first class function but these two topics are not same.
Higher Order functions are the function which can be passed as an argument to the another
function and can be returned from a function.
*/

function square(x) {return x*x}
function cube(x) {return x*x*x}

function do_some_operation(fn, x=0) {
    return fn(x)
}

result = do_some_operation(cube, 10)
console.log(result)

result = do_some_operation(square, 77)
console.log(result);