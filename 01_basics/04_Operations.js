//operations
//operators: + = add,- = subtract,* = multiply,/ = divide,% = modulo (remainder)

console.log(2+2) //4
console.log(2-2) //0
console.log(2*2) //4
console.log(2/2) //1
console.log(4%3) //1 = remainder
console.log(2**3) //8 = power

//decided by the first element datatype
console.log("2"+2+1)  //221 => string
console.log(2+2+"1") //41
console.log(true) //true
console.log(+true) //1 => converted to integer by +
console.log(+"") //0 =>converted to integer by +

//precedence of operators
//Expressions in parentheses are computed before the rest of the expression
//Not operator => ! = logical ~ = binary
//level1 = **
//level2 = /,*,%
//level3 = +,-, concatenation : "john"+"naxi" 

//Prefix and postfix operator
//prefix => first use and then increase
//Postfix increments are executed before prefix increments
//postfix=> first increase and then use
let counter=100
counter++ //postfix => 101
counter-- //postfix =>99
++counter  //prefix =>101
--counter //prefix =>99

