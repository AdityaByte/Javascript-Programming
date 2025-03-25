const coding = ['js', 'ruby', 'rust', 'golang']

const value = coding.forEach((item) => {
    console.log(item);
    return item
})

// The forEach function returns nothing if we explicitly define that return a thing 
// still it returns nothing
console.log(value);

// new example 
// If we want to return something we use filter function for that.

const myNums = [1,2,3,4,5,6,7,8,9,10]

// Here we gives out a callback function inside the paranthesis 
// After that we specify the condition so the elements/items
// which satisfies the particular condition those items are being returned from the filter function.

// Note : If we define a scope in the callback function then we have to implicitly write the return keyword for
// returning the things.
let newNums = myNums.filter((num) => num > 5 ? num : null )

console.log(newNums);

// If i want to achieve the filter function mechanism using the forEach function then -
const nums = [1,2,3,4,5,6,7,8,9,10]

const ourNums = []

nums.forEach((item) => {
    if (item > 5) {
        ourNums.push(item)
    }
})

console.log(ourNums);