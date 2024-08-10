const userEmail = []; //tuthy

// Checking if userEmail is truthy or falsy
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: "Got user email"
// Explanation: An empty array is a truthy value, so the first block executes.


// Example of checking if an array is empty using length
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// Output: "Array is empty"

// Example of checking if an object is empty using Object.keys()
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Output: "Object is empty"
// Explanation: Since `emptyObj` has no keys, the condition is true.


// Nullish Coalescing Operator (??): null, undefined
let val1;
val1 = null ?? 10 ?? 20;
console.log(val1);
// Output: 10
// Explanation: `null` is the first operand, so `??` checks the next value, which is `10`. Since `10` is neither `null` nor `undefined`, it is returned.


// Ternary Operator for conditional expressions
//syntax
/*
    condition ? true : false
*/
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// Output: "more than 80"
// Explanation: The condition `iceTeaPrice <= 80` is false, so the expression after the colon `:` executes.
