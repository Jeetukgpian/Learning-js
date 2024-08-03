const score = 400
// console.log(score);

//other way to create a number
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
//fixed to no of decimal
console.log(balance.toFixed(1));

const otherNumber = 123.8966
//how much precision you want from start=> pass the parameter
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//default version 1,000,000
console.log(hundreds.toLocaleString());
//en-IN indian version => 10,00,000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); //object
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.6)); //round off
console.log(Math.ceil(4.2)); //next greater 
console.log(Math.floor(4.9)); //prev smaller
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //always generate a number btw (0,1)
console.log((Math.random()*10) + 1); //generate a number >0
console.log(Math.floor(Math.random()*10) + 1); //generate an integer >0

const min = 10
const max = 20

//range (max-min+1)
//for keeping our random no always above the min we have to add min to the final ans

console.log(Math.floor(Math.random() * (max - min + 1)) + min)