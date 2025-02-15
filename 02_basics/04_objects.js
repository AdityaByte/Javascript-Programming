// More talk about objects

// const instagramUser = new Object() // Singelton object.
const instagramUser = {}
instagramUser.id = "123abc"
instagramUser.name = "sam-altman"
instagramUser.isLoggedIn = true
console.log(instagramUser)

// Nested objects 
const regularUser = {
    email: "aditya@js.dev",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "pawar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// Merging objects
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2) // {} - target and other parameters are source.
// Note - If you don't pass out empty target {} to the assign method then whole values are going to the obj1 and its get modified.

console.log(obj3);

const obj4 = {...obj1, ...obj2} // By spread operator.
console.log(obj4);

const users = [
    {
        id: 1,
        email: "hellow@gmail.com"
    }
]

console.log(users[0].email)

console.log(instagramUser);

// If you want all the keys of the object
console.log(Object.keys(instagramUser)); // It is of array datatype

// If you want all the values of the object
console.log(Object.values(instagramUser));

// If you want all the entries of the object
console.log(Object.entries(instagramUser));

// For checking out the key exists or not
console.log(instagramUser.hasOwnProperty("isLoggedIn")) // Returns boolean value.

// Destructuring of object in js.

const course = {
    coursename: "CS50 Python programming",
    price: null,
    courseInstructor: "david j malan"
}

/**
 * Sometimes we need to use the values from the object many times.
 * so we need to keep use them like this course.price etc
 * so we can destructure an object.
 */

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// Now i can use the courseInstructor without course.etc/
console.log(instructor);