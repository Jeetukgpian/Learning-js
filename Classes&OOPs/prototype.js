
let myName = "hitesh     "
let mychannel = "chai     "

// Attempt to access the custom 'trueLength' method on a string (will work later in the code)
// console.log(myName.trueLength);

// An array of superheroes
let myHeros = ["thor", "spiderman"];

// An object containing superheroes and their powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // Method to get Spider-Man's power using the 'this' keyword to refer to the current object
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Adding a method to the global Object prototype
// This method will be available to all objects in the environment ***imp
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Adding a method to the Array prototype
// This method will be available to all arrays in the environment
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// Testing the methods added to Object and Array prototypes
// These methods will be accessible to both the heroPower object and myHeros array
// heroPower.hitesh()    // Output: hitesh is present in all objects
// myHeros.hitesh()      // Output: hitesh is present in all objects
// myHeros.heyHitesh()   // Output: Hitesh says hello
// heroPower.heyHitesh() // This will throw an error as heroPower is not an array and heyHitesh is added to Array prototype

// Demonstrating inheritance in JavaScript

// Base object representing a user
const User = {
    name: "chai",
    email: "chai@google.com"
}

// Teacher object with a specific property
const Teacher = {
    makeVideo: true
}

// TeachingSupport object with a specific property
const TeachingSupport = {
    isAvailable: false
}

// TASupport object, which inherits from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // Setting the prototype manually to inherit from TeachingSupport
}

// Setting the prototype of Teacher to be User
Teacher.__proto__ = User

// Modern syntax to set the prototype of TeachingSupport to be Teacher
Object.setPrototypeOf(TeachingSupport, Teacher)

// Testing inheritance
console.log(Teacher.name); // Output: "chai", as Teacher inherits from User
console.log(TASupport.isAvailable); // Output: false, inherited from TeachingSupport

// A string variable with extra spaces
let anotherUsername = "ChaiAurCode     "

// Adding a custom method to the String prototype to get the true length after trimming spaces
String.prototype.trueLength = function(){
    console.log(`${this}`);  // Output the string as it is
    console.log(`True length is: ${this.trim().length}`);  // Output the length of the string after trimming
}

// Testing the trueLength method on different strings
anotherUsername.trueLength()   // Output: "ChaiAurCode     ", True length is: 11
"hitesh".trueLength()          // Output: "hitesh", True length is: 6
"iceTea".trueLength()          // Output: "iceTea", True length is: 6
