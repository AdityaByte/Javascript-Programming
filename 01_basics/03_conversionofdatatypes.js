// Why do we need conversion ?
/* Sometimes the client send some request (taking just an example) and we need to perform some operation to the 
data values that we are assuming to come out if client send an integer in the form of string then we have to convert that
out the specified datatype that we want.*/
// For conversion javascript has some built in function with the datatype names but only the first letter capital.
// For example : Number(), String(), Boolean() etc.

let score = "32"

console.log(typeof score)
console.log(typeof(score)) // We can check out the type using the typeof function too.

let numberScore = Number(score)

console.log(typeof numberScore); // Output : number

// if we have something like 

score = "32abc"
numberScore = Number(score)

console.log(typeof numberScore); // It still gives out the output of Number but the score is not number 
console.log(numberScore) // It gives NaN -> Not a Number.

score = null
numberScore = Number(score)

console.log(typeof numberScore); // It still gives out the output of Number but the score is not number 
console.log(numberScore) // It gives out 0

score = undefined
numberScore = Number(score)

console.log(typeof numberScore); // It still gives out the output of Number but the score is not number 
console.log(numberScore) // It gives out NaN -> Not a number.

score = true
numberScore = Number(score)

console.log(typeof numberScore); // It still gives out the output of Number but the score is not number 
console.log(numberScore) // It gives out 1

/* 
Result -> 
1. Conversion:Number
"32" => 32
"32abc" => NaN
true => 1 and false => 0
null => 0
undefined => NaN
*/

// Now we are converting out to boolean datatype

let isLogged = "true"

let booleanIsLogged = Boolean(isLogged)

console.log(typeof booleanIsLogged)
console.log(booleanIsLogged) // It gives true.

isLogged = "" // If we take an empty string.
booleanIsLogged = Boolean(isLogged)

console.log(booleanIsLogged) // The result is false for empty string

isLogged = 1
booleanIsLogged = Boolean(isLogged)
 
console.log(booleanIsLogged); // Gives True.

isLogged = null
booleanIsLogged = Boolean(isLogged)

console.log(booleanIsLogged) // Gives false

isLogged = undefined
booleanIsLogged = Boolean(isLogged)

console.log(booleanIsLogged) // Gives false

/*
Result -> 
2. Conversion: to Boolean
""(empty string) -> false
"abc"(string) -> true
1 -> true and 0 -> false
null -> false and undefined -> false
*/

// Now we are converting out things to String datatype

let iamdata = 40

let iamstringdata = String(iamdata)

console.log(typeof iamstringdata)
console.log(iamstringdata)

iamdata = true
iamstringdata = String(iamdata)
console.log(iamstringdata) // Gives "true" as true

iamdata = null
iamstringdata = String(iamdata)
console.log(iamstringdata); // Gives null

iamdata = undefined
iamstringdata = String(iamdata)
console.log(iamstringdata) // gives undefined


/*
Result-> Conversion: to String
40 -> "40"
true -> "true" and false -> "false"
null -> "null" and undefined -> "undefined"
*/

// Note : If you want to convert the datatypes to number then there a shortcut for that

let data = +"32"
console.log(data);
console.log(typeof data)
console.log(+true) // Gives Output : 1
console.log(+null) // Gives output : 0
console.log(+"abc") // Gives output : NaN
console.log(+undefined) // Gives output : NaN

// Operations ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// The basics operations of programming that we can perform in javascript too 

let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b); // This could be simplified as a^b
console.log(a%b); 
console.log(a+b);


// Let us we talk about some confusing string to number or number to string conversion.

let chai = "3" + 2 + 2 // Here the first operand is a string so the following operand became string and thus the whole will be concated.
let code = 2 + 3 + "6" // Here the first and second operand is a number so they evaluate as additon after that they get concated and became a string

console.log(typeof chai, typeof code)
console.log(chai, code) // 322, 56
console.log("3" - "2") // Here substration is a number operation so it converts the two string as number.

// Note - The - operator triggers type coercion, converting strings to numbers, so "3" - "2" becomes 3 - 2 = 1.

