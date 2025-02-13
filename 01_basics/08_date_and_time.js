// Date and time in javascript.
// Note - In js months starts from 0.
// Note - Date is an object | Type of date is object.

const myDate = new Date(); // Creating object of Date.
console.log(myDate) 
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(typeof myDate)

// Constructing a Date.
const myNewDate = new Date(2023, 1, 23, 12, 34, 23); // 2023 - year , 1 - month(feb, note - month starts from zero index), 23 - date, and so on time exists.
console.log(myNewDate.toLocaleString())

const myLatestDate = new Date("2024-03-23")
console.log(myLatestDate.toLocaleDateString("en-IN")) // In indian format DD/MM/YYYY