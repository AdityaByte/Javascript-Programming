// Here we are discussing about comparision in js between datatypes.

// Basic comparision

// console.log(1 == 1); // true
// console.log(1 > 2); // false
// console.log(1 < 2); // true
// console.log(12 >= 3); // true
// console.log(12 <= 12); // true
// console.log(12 != 100); // true

// Some surprising comparision


// Note - You should have to avoid the below type comparisions.

console.log("2" > 1)
console.log("02" > 1)
// The output of both the above comparision is true cause javascript converts out the datatypes automatically for comparision.

console.log(null > 0)  // False
console.log(null == 0) // False
console.log(null >= 0) // True

// Note - The reason is that an equality check == and comparsions >, <, <=, >= 
// work differently. Comparision convert null to a number, treating it as 0. That's why 
// null >= 0 is true and null >0 and null == 0 is false.

console.log(undefined > NaN) // False
console.log(undefined == NaN) // False
console.log(undefined >= NaN) // False

// === - Strict check - it strictly checks the value.

console.log("2" === 2) // Firstly it check out the datatypes are same or not.