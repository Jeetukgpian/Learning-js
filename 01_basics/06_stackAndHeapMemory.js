/*
Understanding Stack and Heap Memory in JavaScript
Memory Management in JavaScript:

-Early languages required manual memory management.
-Modern languages like JavaScript automate this process.

Types of Memory:

#Stack Memory:
-Stores primitive data types.//not passed as reference but as a copy
-if you make change in stack memory varibale it will not change the value of original variable
-Stores variables and their values directly.
-Used for function calls, local variables, and simple values.
-Changes to variables directly modify original values.

#Heap Memory:
-Stores objects and non-primitive data types.
-Used for dynamically allocated data, such as objects and arrays.
-Changes to variables update the original values through references.
-Variable Storage and References:

-When a variable is declared, a reference to the value is created instead of a copy.
-Modifying the reference affects the original value.

#Usage Summary:

Stack memory: Stores primitive types, function calls, and local data.
Heap memory: Stores non-primitive types and their reference values.
Key Points:
Stack Memory:

Directly stores variables and their values.
Changes to variables modify the original values.
Used for function calls and local data.
Heap Memory:

Stores objects and non-primitive data types.
Provides references to values instead of copies.
Changing the reference updates the original value.
*/

//Examples - Stack Memory
let myName="Jitendra"
let nickName=myName //memory to nick name is allotted in stack hence copy of myName is nickName if we make change in nickName it will not affect myName
nickName="Jeetu"

console.log(myName);
console.log(nickName);

//Example: Heap Memory

let member1={
    Name:"jeetu",
    rollNo:2210013,
    institute:"IIT KGP"
}

let member2=member1

member2.name="Jitendra"
member2.rollNo=2210014

console.log(member1.name)
console.log(member1.rollNo)

console.log(member2.name)
console.log(member2.rollNo)

//In this case the memory to member1 is allocated in heap and member2 in stack but the reference is given to member1 hence any changes in member2 will result same changes in member1




