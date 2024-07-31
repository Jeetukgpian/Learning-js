/*
Comparison Operators
Always do meaningful comparison means with same datatypes otherwise output is not predictable
1	<	Less than	x < y 
1	<=	Less than or equal	x <= y
1	>	Greater than	x > y
1	>=	Greater than or equal	x >= Array
2	==	Equal	x == y (it only check value and give output)
2	===	Strict equal	x === y (check both value and datatype then give output)
2	!=	Unequal	x != y
2	!==	Strict unequal	x !== y
*/

console.log(2>3) //0
console.log(2>=3) //0
console.log(2<3) //1
console.log(2<=3) //1
console.log(2==3) //0
console.log("2"==2)  //1
console.log("2"===2) //0
console.log(2!=3) //1
console.log("2"==3)  //0
console.log("2"!==2) //1 
//strictly check both datatype and values

//Not a good practice
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
/* why case 3 is true */
/*Because comparison operator >=,<=,>,< convert null into 0 and then compare but == don't do this*/
console.log(undefined>0) //false
console.log(undefined==0) //false
console.log(undefined>=0) //false