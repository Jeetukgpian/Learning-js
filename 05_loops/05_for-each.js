//for...each 

const coding = ["js", "ruby", "java", "python", "cpp"];

/*
    coding.forEach(function (val) {
        console.log(val);
    });
*/

/*
    coding.forEach((item) => {
        console.log(item);
    });
*/

// Function to print each item
// function printMe(item) {
//     console.log(item);
// }

// Using forEach with a named function
// coding.forEach(printMe);

// Using forEach with an arrow function including index and array
/*
    coding.forEach((item, index, arr) => {
        console.log(item, index, arr);
    });
*/

// Array of objects with language details
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Using forEach to print the languageName from each object
myCoding.forEach((item) => {
    console.log(item.languageName);
});

//++++++++++++++++++interesting++++++++++++++

const Coding = ["js", "ruby", "java", "python", "cpp"];

// The forEach() method is used to iterate over each element in the array.
// It does not return a new array; it simply executes the provided function for each array element.
// In this example, the return statement within the forEach() loop does not affect the values array.

const values = coding.forEach( (item) => {
    console.log(item);
    return item; // This return statement does nothing in the context of forEach()
});

// Since forEach() does not return an array, 'values' will be 'undefined'.
console.log(values); // Output: undefined

