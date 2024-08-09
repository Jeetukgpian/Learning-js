const user = {
    username: "Jitendra",
    price: 999,

    // Method to display a welcome message using the current value of `username`
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); // Output: Jitendra, welcome to the website (or sam, if the username is changed)
        console.log(this); // Output: The entire `user` object
    }
}

//this => access value with respect to current context


// user.welcomeMessage(); 
// Output: Jitendra, welcome to the website
// {username: "Jitendra", price: 999, welcomeMessage: function}

// user.username = "sam"; // Changing the username property of the `user` object

// user.welcomeMessage();
// Output:sam, welcome to the website

// {username: "sam", price: 999, welcomeMessage: f}

// Global `this` context (depends on the environment: window in browsers, {} in Node.js)
// console.log(this);
// Output in browser: `Window` object (the global object)
// Output in Node.js: `{}` (an empty object)


// Traditional function declaration with `this` behavior

/* function chai(){
     let username = "Jitendra";
     console.log(this.username);
     Output: undefined (In non-strict mode, `this` refers to the global object where `username` isn't defined)
}
*/

// chai(); 
// Output: undefined


// Function expression with `this` behavior
// const chai = function () {
//     let username = "Jitendra";
//     console.log(this.username); // Output: undefined (same reason as above)
// }

// chai();
// Output: undefined


// Arrow function with `this` behavior
const chai = () => {
    let username = "Jitendra";
    console.log(this); // Output: `this` in arrow functions refers to the enclosing lexical context (global object in non-strict mode, or `{}` in Node.js)
}

// chai();
// Output in browser: `Window` object (the global object)
// Output in Node.js: `{}` (an empty object)


// Arrow function with implicit return of an object
// const addTwo = (num1, num2) => num1 + num2; // Returns the sum of num1 and num2

// const addTwo = (num1, num2) => ( num1 + num2 ); // Also returns the sum of num1 and num2

// Arrow function returning an object
const addTwo = (num1, num2) => ({ username: "Jitendra" }); // Parentheses are used to return an object

console.log(addTwo(3, 4)); 
// Output: { username: "Jitendra" }


// Example with an array and `forEach` method
// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((item) => {
//     console.log(item * 2); // Output: Each element in the array multiplied by 2
// });
// Output:
// 4
// 10
// 6
// 14
// 16
