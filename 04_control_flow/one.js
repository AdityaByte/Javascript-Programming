// Our first control flow is if statement.
// If the condition is true then the statement inside the if block executes.
// if (condition) {
    // This is the syntax
// }

const isUserLoggedIn = true
const temperature = 31

if (temperature < 45) {
    console.log("Temperature is less than 45");
} else {
    console.log("Greater than or equal to 45")
}

if(2 == "2") {
    console.log("Executed");
}

// <, >, >=, <=, ==, != - Some conditions
// === (Strict Equal), !== (Strict not equal)

const score = 200

// Note - var scope is completely global
if (score > 100) {
    const power = "Fly"
    console.log(`User Power ${power}`)
}

// Short hand notation
const balance = 1000

//if (balance > 500) console.log("More than 500"),console.log("Hello world"); // It is known as implicit scope. 
// The above thing is not a good practice and it is unreadable.

// Nesting 

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else {
    console.log("More than 750")
}

const userLoggedIn = true
const debitCard = true

// We can check multiple conditions using && and ||

if (userLoggedIn && debitCard && 2==3) {
    console.log("User can logged in");
}

const isUserLoggedFromEmail = false;
const isUserLoggedFromGoogle = true;
const isUserLoggedFromPhoneNumber = false;

// This is the Or case if any of the condition is true it will executed.
if (isUserLoggedFromEmail || isUserLoggedFromGoogle || isUserLoggedFromPhoneNumber) {
    console.log("Logged In");
}