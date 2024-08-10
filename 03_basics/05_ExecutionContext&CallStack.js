//How JavaScript Executes Code + Call Stack
/*
JavaScript executes code using a *single-threaded, synchronous process*. This means it can only do one thing at a time. 
*/

/*
    1. Call Stack: LIFO (LAST IN FIRST OUT) => stack data structure
    -The Call Stack is a data structure that keeps track of the execution of functions.
    -When a function is called, it’s added to the top of the call stack.
    -When the function execution is complete, it’s removed from the stack.
    -If the stack is empty, it means that all synchronous code has been executed.
    #Example:
    function first() {
        console.log('First Function');
    }

    function second() {
        first(); // First function is called inside second function
        console.log('Second Function');
    }

    second(); 
    console.log('End of Script');

    Call Stack Execution:

    second() is called:
    second is added to the call stack.
    first() is called inside second:
    first is added to the call stack.
    console.log('First Function') is executed.
    first is removed from the call stack.
    console.log('Second Function') is executed:
    second is removed from the call stack.
    console.log('End of Script') is executed:
    The call stack is now empty.
    Output:
    First Function
    Second Function
    End of Script

    2. Stack Overflow:
    -If too many functions are pushed onto the call stack without being popped off, it can lead to a stack overflow, causing the program to crash.
    Example of Stack Overflow:
   
    function overflow() {
        overflow(); // Recursive call without a base case
    }

    overflow(); // This will cause a stack overflow error
    Output:


    RangeError: Maximum call stack size exceeded
    Summary:
    Call Stack: A stack structure used to keep track of function calls and executions.
    Execution Flow: Functions are pushed onto the stack when called and popped off when execution is complete.
    Stack Overflow: Occurs when the stack exceeds its limit due to excessive function calls, typically in recursive functions without an exit condition.
*/

// ++++++++++++++++++++++++INTERESTING WAY++++++++++++++++++++

/*
                                Start
                                  |
               +----------------------------------+
               | Create Global Execution Context  |
               | (Memory + Code Execution Phases) |
               +----------------------------------+
                                  |
         +-------------------------------------------------+
         | Memory Creation Phase                           |
         | - Allocate memory for variables and functions   |
         | - Example: var x = undefined; function foo() {} |
         +-------------------------------------------------+
                                  |
         +-----------------------------------------------------+
         | Code Execution Phase                                |
         | - Execute code line by line                         |
         | - Example: x = 10; console.log(x); // Output: 10    |
         +-----------------------------------------------------+
                                  |
                     +---------------------------+
                     | Function Call?            |
                     | Yes            | No       |
                     |                v          |
                     |  Create Function          |
                     |  Execution Context        |
                     |  (Memory + Code Execution)| 
                     |  - Example: foo()         |
                     +---------------------------+
                                  |
               +--------------------------------------------+
               | Push Function Context to Call Stack        |
               | - Example: foo() is pushed to Call Stack   |
               +--------------------------------------------+
                                  |
         +--------------------------------------------------+
         | Function Execution Phase                         |
         | - Execute function code                          |
         | - Example: function foo() { return x * 2; }      |
         | - Call Stack: [Global, foo]                      |
         +--------------------------------------------------+
                                  |
         +--------------------------------------------+
         | Pop Function Context from Call Stack       |
         | - Example: After foo() completes, pop it   |
         |   from the Call Stack                      |
         | - Call Stack: [Global]                     |
         +--------------------------------------------+
                                  |
                                End

 */