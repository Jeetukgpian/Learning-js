//1. Synchronous JavaScript:
//Definition:
/*
    -Synchronous code is executed line by line, in the order it appears. Each statement must complete before the next one is executed.

Blocking Nature/code: Blocks the after code

    -If a line of code takes a long time to execute (e.g., a large loop or a network request), it blocks the execution of subsequent lines until it finishes.
Example:

console.log('First');
alert('This is a blocking alert'); // This will block further execution until dismissed
console.log('Second'); // Executed only after the alert is dismissed
Characteristics:

Simple to understand and debug.
Blocking operations can make the application unresponsive. - they have their own use cases
Use Cases:

Good for simple, sequential operations where blocking is not an issue.

2. Asynchronous JavaScript:
Definition:

    -Asynchronous code allows other tasks to run while waiting for long operations to complete, without blocking the main thread.

Non-blocking Nature:
    //Api request, setTimeout, setInterval
    -Asynchronous operations (e.g., API calls, timers) can be executed in the background, allowing the main program flow to continue.

Examples of Asynchronous Operations:

    setTimeout and setInterval: Execute code after a delay.

    setTimeout= do it only once after the set time
    setInterval = do it again and again after each time interval setted untill not stop 

    Promises and async/await: Handle operations that return values in the future.
++++++++++++++++++++++++Do it later++++++++++++++++++
AJAX/fetch API: Make asynchronous HTTP requests.
Example:


console.log('First');

setTimeout(() => {
    console.log('Second'); // This runs after 2 seconds
}, 2000);

console.log('Third');
Output:
First
Third
Second
Callbacks:

A function passed as an argument to another function, which is executed after the asynchronous operation is complete.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Logs "Data fetched" after 1 second
});
3. Promises:
Definition:

A Promise is an object representing the eventual completion or failure of an asynchronous operation.
States:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Example:

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Operation Successful');
    } else {
        reject('Operation Failed');
    }
});

promise
    .then(result => console.log(result)) // Logs "Operation Successful"
    .catch(error => console.log(error));
Chaining:

Promises can be chained to handle sequences of asynchronous operations.
javascript
Copy code
promise
    .then(result => {
        console.log(result);
        return 'Next step';
    })
    .then(next => console.log(next))
    .catch(error => console.log(error));
4. async/await:
Definition:

Syntactic sugar built on top of Promises, allowing asynchronous code to be written in a more synchronous-looking fashion.
async Function:

Declaring a function as async means it returns a Promise.
j
async function fetchData() {
    return 'Data fetched';
}

fetchData().then(data => console.log(data)); // Logs "Data fetched"
await Keyword:

Pauses the execution of the async function until the Promise is resolved, without blocking the main thread.

async function fetchData() {
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
    console.log(result); // Logs "Data fetched" after 1 second
}

fetchData();
Error Handling:

Use try...catch to handle errors in async/await code.

async function fetchData() {
    try {
        let result = await new Promise((resolve, reject) => {
            throw new Error('Fetch failed');
        });
    } catch (error) {
        console.log(error.message); // Logs "Fetch failed"
    }
}

fetchData();
5. Event Loop:
Definition:

The Event Loop is responsible for handling asynchronous operations in JavaScript. It continuously checks the call stack and task queue, executing tasks as they become available.
Process:

Call Stack: Holds the currently executing function.
Web APIs: Handle asynchronous operations (e.g., setTimeout, AJAX).
Task Queue: Holds callback functions waiting to be executed.
Event Loop: Moves tasks from the task queue to the call stack when the call stack is empty.
Understanding:

Knowing how the event loop works is crucial to understanding the timing of asynchronous code.
Summary:
Synchronous Code: Executes sequentially, blocking further code execution until each task is complete.
Asynchronous Code: Allows other operations to run while waiting for tasks to complete, using callbacks, Promises, and async/await.
Promises & async/await: Modern approaches to handle asynchronous code more elegantly.
Event Loop: Key to how JavaScript manages asynchronous code execution.
*/