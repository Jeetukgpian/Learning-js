
function multipleBy5(num) {
    return num * 5;
}

// Adding a custom property 'power' to the function object
multipleBy5.power = 2;

console.log(multipleBy5(5));      // Output: 25, as 5 * 5 = 25
console.log(multipleBy5.power);   // Output: 2, accessing the custom property added to the function

// The prototype object for the function multipleBy5
// Since we didn't modify the prototype, this will show an empty object
console.log(multipleBy5.prototype);  // Output: {}


// Constructor function to create a user object with a username and score
function createUser(username, score) {
    this.username = username; // this => gives current context
    this.score = score;
}

// Adding a method to the prototype of createUser that increments the score ********imp
createUser.prototype.increment = function() {
    this.score++;
}

// Adding another method to the prototype that prints the current score
createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

// Using the 'new' keyword to create an instance of createUser
const chai = new createUser("chai", 25);  // Creates a new object with username "chai" and score 25

// Incorrect usage of 'createUser' without the 'new' keyword
// This will not create a new object and instead will return 'undefined'
const tea = createUser("tea", 250);  // Since 'new' is missing, 'this' inside createUser points to the global object or undefined in strict mode

// Calling the method to print the score of the 'chai' object
chai.printMe();  // Output: "Score is 25"


/*

Explanation of the 'new' keyword:

1. A new object is created:
   - When you use 'new', JavaScript creates a brand new object.

2. The prototype is linked:
   - The newly created object is linked to the constructor's prototype. This is why the new object can access the methods and properties defined on the constructor's prototype.

3. The constructor is called:
   - The constructor function is invoked with 'this' bound to the new object. The properties and methods defined in the constructor are added to 'this', the new object.

4. The new object is returned:
   - If the constructor doesn't explicitly return an object, the new object created at the beginning is returned.

Important Notes:
- When using 'new', the constructor function serves as a blueprint for creating new objects.
- Forgetting to use 'new' can lead to unintended consequences, like assigning properties to the global object instead of a new instance.
*/

