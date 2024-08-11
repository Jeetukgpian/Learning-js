const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The `map()` method creates a new array by applying a function to each element of the original array.
// Here, the first `map()` multiplies each number by 10.
// The second `map()` adds 1 to each resulting number from the first `map()`.

// After that, the `filter()` method is used to create a new array with elements that are greater than or equal to 40.

const newNums = myNumbers
                .map((num) => num * 10 )   // Step 1: Multiply each number by 10
                .map( (num) => num + 1)    // Step 2: Add 1 to each number
                .filter( (num) => num >= 40) // Step 3: Filter numbers that are greater than or equal to 40

console.log(newNums); 
// Output: [41, 51, 61, 71, 81, 91, 101]

// Explanation of the output:
// Original array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Step 1 (map): [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// Step 2 (map): [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
// Step 3 (filter): [41, 51, 61, 71, 81, 91, 101] (only numbers >= 40 are kept)



const myNums = [1, 2, 3];

// The `reduce()` method applies a function to an accumulator and each element in the array (from left to right),
// to reduce the array to a single value. In this case, it's used to sum up the elements of `myNums`.

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0);
/*
    output: 
    acc: 0 and currval: 1
    acc: 1 and currval: 2
    acc: 3 and currval: 3
    6
*/

const myNewTotal = myNums.reduce((acc, curr) => acc + curr, 0); // Simplified arrow function version

console.log(myNewTotal); // Output: 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Here, `reduce()` is used to calculate the total price of items in the shopping cart.
// The accumulator (`acc`) starts at 0, and each item's price is added to it during the iteration.

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996

// Explanation:
// Initial accumulator value is 0 (as provided in the second argument to `reduce`).
// Iteration 1: acc = 0, item.price = 2999 => acc + item.price = 2999
// Iteration 2: acc = 2999, item.price = 999 => acc + item.price = 3998
// Iteration 3: acc = 3998, item.price = 5999 => acc + item.price = 9997
// Iteration 4: acc = 9997, item.price = 12999 => acc + item.price = 22996
// Final result: 22996



