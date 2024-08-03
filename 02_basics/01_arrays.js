//Introduction to arrays in js

let newArr=[1,2,3,4,5,6,7]
let createArr=new Array(1,3,4,5,6)

// console.log(newArr)
// console.log(createArr)

let arr=[1,2,3,'c',"shanaya"]
let brr=[1,2,3,["shami","kholi","dhoni"],[2,3,4],'e']

// console.log(arr)
// console.log(brr)

//Method on array
newArr.push(10) //10 is pushed at back
newArr.push(100) //100 is pushed at back
newArr.pop() //100 is popped from back

newArr.unshift(17) //insert at the start by shifting all elements
newArr.shift() //remove from start

console.log(newArr.includes(5)) //true 5 is included in newArr => check that a val is included or not 
console.log(newArr.indexOf(5)) //give the index

const newArr2 = newArr.join() //join arrays

// console.log(newArr);
// console.log(newArr2);

//slice and splice
let myNewArr=newArr.slice(1,4) //don't modify original array
console.log(myNewArr) //it does not include last element passed
let myNewArr2=newArr.splice(1,4) 
//it manipulates the array means remove the element of given range inclusive of both
console.log(newArr) //modified due to splice operation
console.log(myNewArr2) 




