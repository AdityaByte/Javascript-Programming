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

// Wants to add up more thing about javascript that i know after a revision session.
// Like when we compare undefined and null like this undefined == null.
// This was the thing that was hardcoded in the language that it returns true despite of the fact that
// we assume that they both are falsy values so when we do the check type coersion happens but the thing is
// that it was hardcoded to the language.

if (undefined == null) {
    console.log("Yeah the undefined == null is harcoded.");
}

// But when we do the other things like we have these things.
// undefined, NaN, "", "string", false, true, [], null, 10, 0 - These are the things we have.
// So just checking the language in deep like what happens when we compare these values.

// When we compare the undefined with NaN ok.
// In this case the rule from specification says that.
// Keep that into mind: If one is undefined and the other is not null (other than null) this would returns false.
// Excepts itself like undefined == undefined returns true.
const unNan = undefined == NaN
console.log(unNan); // False
console.log(undefined == undefined) // True.

// Now we are comparing other things like a string with a boolean value or vice versa is true.
// Reason: left - String and right - boolean
// If one value is boolean -> convert that boolean to the number so.
// false -> Number(false) -> 0
// Now left is string and right is a number.
// So as per if one is number then the other datatype is converted to number.
// "" -> Number("") -> 0
// So finally -> 0 == 0 // return true.
console.log("" == false)
console.log(Boolean("")) // Because of this.

// Same as for this.
// For this boolean -> converted to number: true -> 1.
// Now string == number comparision convert string to number.
// Number("value") -> NaN so this will leads to false.
console.log("value" == true)

// Now we are comparing empty array, [] to a empty object, {}.
console.log([] == {}) // false
// But why false.
// Reason:
// [] -> Array -> type object.
// {} -> Object -> type object.
// so it is object vs object comparision.
// So rule says when we do object vs object comparision then the == comparsion checks for references.
// Both the references are pointing to same object or not.
// If they do then evaluates to true otherwise false.
// [] -> new array instance. and {} -> new object instance.
// Similar comparsion with false output.
console.log([] == []) // false
console.log({} == {}) // false

// True expersion.
let a = []
let b = a // a and b pointing to the same array instance.
console.log(a == b) // true.

// Now came back to when one value is a number comparsion.
console.log(true == 1) // true.
// Reason: When one value is a number then to the other value type coersion happens so true -> Number(true) -> 1.
// true -> 1
// 1 == 1 -> leads to true.

// Now boolean with an empty array.
console.log(false == []) // true
// false -> convert -> number -> Number(false) -> 0
// comparsion: 0 == []
// Now the other is converted to number so Number([]) == 0
// false -> 0 and [] -> 0
// 0 == 0 -> leads to true.

// Comparing null with number.
// Here the rule in the abstract equality says that.
// when the one is null and the other is undefined returns true.
// otherwise if anything else from undefined returns false.
console.log(null == 0) // false

console.log(1 === true) // This will leads to false cause no type coersion happens and strict type check follows.