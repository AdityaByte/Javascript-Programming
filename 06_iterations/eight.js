// Reduce method in js.
// The reduce() method in JavaScript is used to process an array
// and reduce it to a single value. It executes a callback function
// on each element of the array, accumulating a result as it iterates.

const nums = [1,2,3,4,5]

// So the reduce function takes an accumulator, currentValue and the initialValue.
// It reduces a single value.
// It also takes a callback function.
const initialValue = 0

// 0 + 1 + 2 + 3 + 4 + 5

// Here what happens like
// At first step the accumulator value is the initialValue 
// accumutalator = 0 and currentValue = 1 so for next step, acc=0+1
// accumulator = 1 and currentValue = 2 so acc=1+2
// accumulator = 2 and so on we get the 15 at the end.
const result = nums.reduce((accumulator, currentValue) => {
    console.log(`InitialValue: ${initialValue} , Accumulator: ${accumulator} , CurrentValue: ${currentValue}`);
    return accumulator + currentValue
}, initialValue)

console.log(result);

// Here we are taking a case scenerio that
// Let we have a shopping cart of courses and we have a price list 
// so when the user selects out the courses we have to give that the total of all the price

const shoppingCart = [
    {
        itemName: "JS course",
        price: 599
    },
    {
        itemName: "Java course",
        price: 899
    },
    {
        itemName: "Golang course",
        price: 9000
    }
]

const totalPrice = shoppingCart.reduce((acc, currVal) => acc + currVal.price, 0)

console.log(totalPrice);