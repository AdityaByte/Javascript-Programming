// Map function in js.
// The task that the map function do is that if we want to apply some
// operation to a iterable and return out a new iterable from it we use the map function.
// Map do operation and do a thing

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.map((item) => item + 1)
console.log(newNums);

// Method chaining in js : By the help of method chaining we can use multiple methods
// at a single time and perform operation and gets the result from it.

const myNewNums = nums.map((item) => item * 10)
    .map((item) => item + 1) // This map has the method which was returned by the upper one.
    .filter((item) => item > 40)

console.log(myNewNums)