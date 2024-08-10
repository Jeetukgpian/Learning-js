/* =>syntax
for (let intialisation; condition; increment/decrement) {
    //code
}
*/


// Loop from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    // Check if the current element is 5
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// console.log(element); //can't access due to restriction from block scope

// Nested loops: Outer loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Inner loop from 1 to 10
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer loop value: ${i}`);
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Array with three elements
let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length); //3

// Loop through each element in the array
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// Example of using 'break' to exit a loop
// Loop from 1 to 20
// for (let index = 1; index <= 20; index++) {
//     // Check if the index is 5
//     if (index == 5) {
//         console.log(`Detected 5`);
//         // Exit the loop when index is 5
//         break;
//     }
//     // Print the current value of index
//     console.log(`Value of i is ${index}`);
// }

// Example of using 'continue' to skip to the next iteration
for (let index = 1; index <= 20; index++) {
    // Check if the index is 5
    if (index == 5) {
        console.log(`Detected 5`);
        // Skip the rest of the loop body for index 5
        continue;
    }
    console.log(`Value of i is ${index}`);
}
