// In this file we are going to learn about some more high order loops in js.

const str = "Aditya Pawar"

// For-of loop in js.
for (const char of str) {
    console.log(char);
}

// Another example of for of loop:
const greetings = "Hello world"
for (const greet of greetings) {
    if(greet.match(" ")) {
        continue
    }

    console.log(`Each char is ${greet}`);
}

// Maps - Similar to array but they are of key value pair.
// Maps are also object
// It carries a unique set of values.
// It maintains the order.

const map = new Map()
map.set('IN', "india")
map.set("USA", "united states of america")
map.set("USA", "united states of america")

// It doesn't include the duplicate value in this
console.log(map);

// When we use the below code we get the each individual value as an array.
for (const item of map) {
    console.log(item);
}

// Destructuring the map 
for (const [key, value] of map) {
    console.log(`Key: ${key} and Value: ${value}`)
}

const myObject = {
    "game1": "NFS",
    "game2": "Pokemon"
}

// The below code throws an error that the objects are not iterable.
for (const [key, value] of myObject) {
    console.log(`Key: ${key} and Value: ${value}`)
}