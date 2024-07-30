//conversion of one datatype to another
//string to number,boolean, undefined etc

//format of typeCast => datatype(variable to be typecast)

let Name="Jitendra"
let numberName=Number(Name)

console.log(typeof numberName)
console.log(numberName); //NaN => not a number

//"22Abc" => NaN (not a number) => but datatype is number
//"33" => 33 (it is a number and dt is also a number)

let rollNo=2210013
let stringRollNo=String(rollNo)

console.log(typeof rollNo);
console.log(typeof stringRollNo); //converted to string

//conversion of number to boolean
//1 => true, 0=> false ,""=>false, "Jitendra"=> true
let isSignUp=1;
console.log(typeof Boolean(isSignUp))
console.log(Boolean(isSignUp)); // true


