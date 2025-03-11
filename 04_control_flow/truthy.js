const userEmail = []

if(userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values
// false , 0, -0, BigInt 0n, null, undefined, NaN, ""

// Truthy values
// "0", 'false', " ", [], {}, true, function(){}-Empty function.

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

/** Note:
 * When we compare these things we get true
 * 1.false == 0
 * 2. false == ''
 * 3. 0 == ''
 */

// Nullish Coalescing Operator (??) : null defined
// This operator is used in the situation when we have something crucial operation and 
// there it might have a chance that they can return null so instead of getting the null pointer exception 
// we use the nullish coalescing operator for not initializing the variable with null.

let val1;
val1 = 5 ?? 10; // For null safety.
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

val1 = null ?? 40 ?? 21 // Which first value it gets is assigned into it.
console.log(val1)

// Ternary operator
// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("less than 80") ;