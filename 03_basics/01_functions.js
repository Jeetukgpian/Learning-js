//Learning functions in js

//if you want to do any task multiple time than use wrap this task in a function and can call the same whenever required 

//Example : I want to print my name : JITENDRA
//Wrap this whole console in a function
/*console.log("J")
console.log("I")
console.log("T")
console.log("E")
console.log("N")
console.log("D")
console.log("R")
console.log("A")*/

function printName(){
    console.log("J")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")
}

printName()

//Other ways to do the same
function sayName(){
    return "Jitendra"
}

console.log(sayName())

//BY using parameter
// function sayMyName(userName,surname){
//     return `My name is ${userName} ${surname}`
// }

// console.log(sayMyName("Jitendra","Bhati"))
//if arguments are not passed by user
// console.log(sayMyName()) //My name is undefined undefined
//to avoid this -> make if else conditions within the loop like

function sayMyName(userName,surname){
    if(!userName && !surname){
        console.log("Please Enter userName and surname")
        return
    }else if(!userName){
        console.log("Please Enter userName")
        return
    }else if(!surname){
        console.log("Please Enter surname")
        return
    }
    return `My name is ${userName} ${surname}`
}

console.log(sayMyName()) //Please Enter userName and surname
console.log(sayMyName("Jitendra",)) //Please Enter surname

//You can also set parameter to default argument
function sum(num1,num2){
    return num1+num2;
}
console.log(sum()) //NaN

//but if you already set a default argument to num1 and num2
function sum(num1=0,num2=0){
    return num1+num2;
}

console.log(sum()) //0
console.log(sum(3,9))

//function basics part2

//calculating carts value

//here ... => rest operator
function calculateCartValue(...num){
    return num //it will return an array of value
}

console.log(calculateCartValue(100,200,400,300))
//[100,200,400,300] 

function newCalc(num1,num2,...num){
    return num
}

console.log(newCalc(100,200,300,400,500,600))
//[300,400,500,600] as num1=100,num2=200 as rest are in num using rest operator

//Handle object parameter

let user={
    Name:"Jitendra",
    rollNo:"22BT10013",
    Subject:121001
}

function profile(anyObject){
    return `Name = ${anyObject.name}, Roll No = ${anyObject.rollNo}, Subject = ${anyObject.Subject}`
}

console.log(profile(user))

//other way to pass object
console.log(profile({
    name:"Jeetu bhati",
    rollNo:"22BT10011",
    Subject:102010
}))

//Array as an parameter
let arr=[100,2,400,"Jira"]

//function to access first value from arr
function accessFirstValue(arr){
    return arr[1] //2
}

console.log(accessFirstValue(arr)) //2