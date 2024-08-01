//Learning strings in Js

let Name="Jitendra"
let nickName='Jeetu'

//concatenation of multiple strings
console.log(Name+nickName) //this method not prefered in modern development
//access element
console.log(Name[6])
console.log(Name.__proto__) //converted to object
//prototype => by converting to prototype you can use all string method
//But it is not needed anymore

//Always prefer string interpolation

console.log(`My Name is ${Name} and nick name is ${nickName}`)


//Methods on strings
console.log(Name.length) //length is not a function
console.log(Name.toLowerCase()) //change to lower case
console.log(Name.toUpperCase()) //change to uppercase
console.log(Name.indexOf("e")) //give index of char
console.log(Name.charCodeAt(2)) //Ascii value
console.log(Name.charAt(2)) //give char at given index
console.log(Name.split('t')) //split across given char
console.log(Name.slice(2,6)) //slice btw given indices
console.log(Name.slice(-7,3)) //slice btw given indices from back also
console.log(Name.substring(0,5)) //substring 
let School="   IIT  "
console.log(School.trim()) //trim space before and after the string
console.log(School.trimStart()) //trim space from start
console.log(School.trimEnd()) //trim Space from end

console.log(Name.replace("a","sa")) //replace the given value with input string 
console.log(Name.includes('Jitendr')) //to check that it include given input string






