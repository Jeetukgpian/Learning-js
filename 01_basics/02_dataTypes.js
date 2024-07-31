"use strict" //Means now all code will be treated as newer version of js

//code readability should be your priority
//no need to end each line with semicolon (;)
//start each line as new line
/* alert(2+5) it is implemented in dom not in node environment*/


//dataTypes
//string,number,boolean,null,undefined,bigint,object,symbol
let Name="Jitendra" //string
let rollNo=2210013  //number
let isLoggedIn=true //boolean = true,false
let city=null  //object datatype (standAlone value)
let village //undefined datatype

//object datatype will be discussed later in detail
//symbol datatype is used in ReactJs very frequently

//typeof
console.log(typeof Name) //string
console.log(typeof city) //null is treated as object dt
console.log(typeof rollNo) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof village) //undefined
console.log(typeof ["name",221013,"cinema"]) //object


//Return type of variables in JavaScript
//Primitive Datatypes => can't give refrence
/*     Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
*/
//Non-primitive Datatypes => always give reference
/*     Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/