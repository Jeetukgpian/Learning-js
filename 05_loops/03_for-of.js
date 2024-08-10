// for...of loop -> iterate over array and strings

// Array with empty strings
// ["", "", ""]
// Array with empty objects
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for...of loop to iterate over array elements
for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello world!";
// for...of loop to iterate over each character in the string
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps 

// Creating a new Map object
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
// The value for key 'IN' is updated to "Indonesia" 
map.set('IN', "Indonesia");

// console.log(map);

// for...of loop to iterate over map entries
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Object with key-value pairs
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// The following loop will not work for objects directly
// Objects do not have the iterable protocol needed for for...of
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } -> not work for objects
