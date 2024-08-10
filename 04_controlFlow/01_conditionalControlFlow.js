//Control flow is fundamental to making your JavaScript code dynamic and responsive. It enables your code to respond to different inputs and conditions, loop through data, handle errors, and manage the order in which your code executes.


//Control flow in JavaScript refers to the order in which individual statements, instructions, or function calls are executed or evaluated. By default, JavaScript code runs sequentially from the first statement to the last, but control flow structures allow you to alter this order based on specific conditions or logic.


/* Types of Control Flow in JavaScript

1. Conditional Statements
   - `if`, `else if`, `else`
   - `switch`

2. Loops
   - `for`
   - `while`
   - `do...while`

3. Function Calls

4. Exception Handling
   - `try`, `catch`, `finally`
   - `throw`

5. Jump Statements
   - `break`
   - `continue`
   - `return`
*/

//++++++++++++Examples+++++++++++++++++++

// Example 1: Basic if-else condition to check temperature
const isUserloggedIn = true;  
const temperature = 41;  

if (temperature === 40) {
    console.log("less than 50"); 
} else {
    console.log("temperature is greater than 50"); 
}

// Output: "temperature is greater than 50"

// Example 2: Using comparison operators and block scope
const score = 200;  

if (score > 100) {
    let power = "fly";  // Variable declared inside the block (block-scoped)
    console.log(`User power: ${power}`);  // This will output "User power: fly"
}

// Trying to access `power` outside the block will cause an error because it's block-scoped
// console.log(`User power: ${power}`); // Uncommenting this line will cause an error

// Output: "User power: fly"
// Comment: The second console.log is commented out because it would cause a reference error

// Example 3: Using if statements with multiple conditions and without curly braces
const balance = 1000;  

// If balance is greater than 500, execute the next two console.log statements
if (balance > 500) console.log("test"), console.log("test2"); //not a good practice

// Output: "test"
// Output: "test2"

// Example 4: Using if-else if-else to handle multiple conditions
if (balance < 500) {
    console.log("less than 500");  // This block will not execute
} else if (balance < 750) {
    console.log("less than 750");  // This block will not execute
} else if (balance < 900) {
    console.log("less than 900");  // This block will not execute
} else {
    console.log("less than 1200");  // This block will execute as balance is 1000
}

// Output: "less than 1200"

// Example 5: Logical AND (&&) and OR (||) operators with conditions
const userLoggedIn = true;
const debitCard = true; 
const loggedInFromGoogle = false;  
const loggedInFromEmail = true;  

// Check if the user is logged in, has a debit card, and if 2 equals 3 (which it does not)
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");  // This block will not execute as 2 != 3
}

// Output: (No output, condition is false)

// Check if the user logged in from either Google or Email
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");  // This block will execute as the user logged in from Email
}

// Output: "User logged in"






