// String in js

const name = "aditya"
const age = 20
console.log(name + age + " hello") // It's the old way of concating the string. Try to avoid this syntax.

// Instead of the upper syntax you can use the back ticks (template literals)
/* String interpolation - String interpolation is the process of inserting variables or expressions inside a string, 
    typically using a specific syntax, to dynamically generate text output.
*/

console.log(`hi, my name is ${name} and mine age is ${age}`) // It's similar to the fstring in python.

// We can create string in the form of objects too
// Just like in java we create objects using the new keyword same going on there.
const name2 = new String("aditya pawar")

console.log(name2) // It gives more thing not just a string it gives an object
console.log(name2.__proto__) // Output: {} object but its not empty.

// Note - we can use any prototype method without writing the __proto__ syntax.


let url = "https://aditya.dev/?query=aditya pawar"
url = url.replace(" ", "%20")
console.log(url)

// String methods from prototype.

const str = new String('Javascript')

console.table([
    str.at(0), // It gives the letter at index
    str.charAt(0), // It too gives the letter at index.
    str.indexOf("J"),
    str.replace("script", ""), // It replace a string to another
    str.trim(), // Removes the leading and trailing space.
    str.slice(0,4), // it creates a slice it can exists 
    str.includes("Java"),
])