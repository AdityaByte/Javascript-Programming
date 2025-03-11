// {
//     var accountState = "activated"
//     console.log(accountState)
// }

// // accountState = "deactivated"

// console.log(accountState);

// let opt1 = 1 + 2 + "2" // The first two operation are performed using the addition since they are number and after that they became string and concat out.
// let opt2 = "1" + 2 + 2

// console.log(opt1)
// console.log("Type of first operation", typeof opt1)

// console.log(opt2)
// console.log("Type of second operation", typeof opt2)

// console.log(+"")

// Primitive datatypes : call by value
// let a = 10;
// let b = a;

// b++;
// console.log(b); // Output : 11
// console.log(a); // Output : 10

// // Non-primitive datatypes : call by reference

// let arr  = [1,2,3,4];
// let arr1 = arr;

// arr1[0] = 100;

// console.log(arr1); 
// console.log(arr)
// // They are same 

// const str = "{ name: 'aditya' }"
// const newStr = str.replace("aditya", "yeshank")
// console.log(newStr)

let a = 10;
let b = 20;

const result = function (a, b) {
    console.log(typeof a, typeof b, a, b)
    let r =  a + b;
    return r;
}

console.log(result(10 ,30));
console.log(result())
