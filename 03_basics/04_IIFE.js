// Named IIFE (Immediately Invoked Function Expression)
(function chai() {
    console.log(`DB CONNECTED`);
})(); //always end it with semicolon otherwise next IIFE function will not be executed

// Output: DB CONNECTED

// Arrow function IIFE with a parameter
((name) => {
    console.log(`DB CONNECTED to ${name}`);
})('hitesh');

// Output: DB CONNECTED to hitesh
