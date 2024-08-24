// Creating a new Promise (promiseOne) that resolves after 1 second
const promiseOne = new Promise(function(resolve, reject){
    // Perform an async task (like DB calls, cryptography, network operations)
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // Resolve the promise after the task is complete
    }, 1000)
})

// Consuming the promise using .then
promiseOne.then(function(){
    console.log("Promise consumed");
})

// Creating and consuming a promise inline (without storing in a variable)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Resolve the promise
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// Creating another Promise (promiseThree) that resolves with user data after 1 second
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000)
})

// Consuming promiseThree to get the user data
promiseThree.then(function(user){
    console.log(user); // Logs the user object {username: "Chai", email: "chai@example.com"}
})

// Creating a Promise (promiseFour) with a conditional resolve or reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating an error condition
        if (!error) {
            resolve({username: "hitesh", password: "123"}); // Resolve with user data
        } else {
            reject('ERROR: Something went wrong'); // Reject the promise with an error message
        }
    }, 1000)
})

// Consuming promiseFour with .then, .catch, and .finally
promiseFour
.then((user) => {
    console.log(user); // Logs the user data if resolved
    return user.username; // Returns the username for the next .then
}).then((username) => {
    console.log(username); // Logs the username
}).catch(function(error){
    console.log(error); // Logs the error message if the promise is rejected
}).finally(() => console.log("The promise is either resolved or rejected")); // Always runs regardless of resolve or reject

// Creating a Promise (promiseFive) with async/await syntax for consumption
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating an error condition
        if (!error) {
            resolve({username: "javascript", password: "123"}); // Resolve with user data
        } else {
            reject('ERROR: JS went wrong'); // Reject the promise with an error message
        }
    }, 1000)
});

// Consuming promiseFive with async/await inside a function
async function consumePromiseFive(){
    try {
        const response = await promiseFive; // Await the resolution of promiseFive
        console.log(response); // Logs the response if resolved
    } catch (error) {
        console.log(error); // Logs the error message if the promise is rejected
    }
}

consumePromiseFive(); // Call the async function to consume promiseFive

// Example of an async function making an API request (commented out)
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Await the fetch request
//         const data = await response.json(); // Await the conversion of response to JSON
//         console.log(data); // Logs the user data from the API
//     } catch (error) {
//         console.log("E: ", error); // Logs any error that occurs during fetch
//     }
// }

// Uncomment to make the API call
// getAllUsers()

// Making a fetch request to GitHub API and handling it with Promises
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json(); // Convert the response to JSON
})
.then((data) => {
    console.log(data); // Logs the data returned by the API
})
.catch((error) => console.log(error)); // Logs any error that occurs during the fetch

// Note: Promise.all can be used to run multiple promises concurrently and wait for all of them to resolve
// Example: Promise.all([promiseOne, promiseTwo, promiseThree]).then((results) => { console.log(results); })
