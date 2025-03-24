// for-each loop in js.

const coding = ['js', 'ruby', 'haskell', 'scala']
console.log(coding.__proto__); // we get a four of loop in the prototype

// It takes a callback function as a parameter.
coding.forEach( function (item) {
    console.log(item);
})

// We can convert it a form of arrow function too
coding.forEach((val) => console.log(val))

// Let we have another seperate function and we just want to pass a reference of it

const myFunction = (element) => {
    console.log(element.toUpperCase());
} 

coding.forEach(myFunction) // Here i have just passed the reference of it i haven't execute it like myFunction()

// More about foreach
coding.forEach((item, index, arr) => {
    console.log(`Item: ${item} and Index: ${index} and Array: ${arr}`);
})

// Objects inside array

const myCoding = [
    {
        langName: "javascript",
        langfileName: ".js"
    },
    {
        langName: "java",
        langfileName: ".java"
    },
    {
        langName: "golang",
        langfileName: ".go"
    },
    {
        langName: "rust",
        langfileName: ".rs"
    }
]

myCoding.forEach((object) => {
    console.log(object.langfileName)
})