// Here we are understooding the concepts of array.
// Points to remember about array in js.
/* 1. In js arrays are dyamic in size like we can add any number of elements after its creation. 
2. Unlike arrays are the collection of similar types of data in js array can hold mutliple datatypes values.
3. Like in every language array index starts from zero.
4. Arrays are also object in js.
Note : The js array are not true arrays like in other languages c,c++,java,golang etc.

// Shallow copies are generated of an array in js that the same references are shared by the different objects.
// Note - Deep copies are the copies that are totally independent in their own.
*/



const myArr = [1,2,3,4,5,6]
console.log(myArr[6]) // Note : If you are accessing out of bound element then it gives undefined.

console.log(typeof myArr); // Object

// We can also store unlike elements in a array too.
const newArr = ["aditya", 12, 12.12, true, {name: "aditya"}]
console.log(newArr)
// Accessing items from an array - by index.
console.log(newArr[4])
console.log(typeof newArr[4])

// We can also explicitly create an array like this in js.
// const latestArray = new Array([1,2,3,4,5]) // You dont need to place bracket inside that
const latestArray = new Array(1,2,4,5,63)
console.log(latestArray.__proto__)
// Here are some methods that came with array are---

console.log(latestArray.includes(34)) // For checking that the element exists or not.
console.log(latestArray.join()) // It will convert the array to a string.
console.log(latestArray.indexOf(12)) // It will return -1 cause the element don't find out.
// for each method for traversing through an array
latestArray.forEach((element) => {
    console.log(element)
})

// let we have two arrays 
const array1 = [1,2,3,4,5,6,7]
const array2 = array1;

console.log("Array 1:", array1)
console.log("Array 2:", array2)

// Here i am performing the slicing operation to the array1
console.log(array1.slice(1,4)) // First one is inclusive and the last one is exclusive.
console.log("Array 1:", array1)
console.log(array2.splice(0,4)) // First one is inclusive and last one is exclusive.
// But splice change the actual array but in slice we created out a copy of it in which the operation are performed on the actual array.

console.log("Array 1:", array1) // Output : Array 2: [ 5, 6, 7 ]
console.log("Array 2:", array2) // Output : Array 2: [ 5, 6, 7 ]

// Now came to another chapter of push and poping elements from an array

const meraArray = [1,2,3,4]
meraArray.push(10) // Push 10 at last
console.log(meraArray);
meraArray.pop() // Pop element from the last
console.log(meraArray);

// If you want to push and pop at begining you can use unshift method and shift
meraArray.unshift(10);
console.log(meraArray); // Note - But you have to shift other elements from the index so it is time consuming and memory too.
meraArray.shift();
console.log(meraArray)