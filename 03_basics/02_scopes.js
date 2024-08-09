//globally-scoped variables
var x = 1;

if (x === 1) {
  var x = 2; //value of x modified from x=1 to x=2

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

//scope is limited to curly brackets
if(1){
    let a=100
    const b=200
}

//cannot access a and b outside the brackets
// console.log(a) ->reference error =>a is not defined

function one(){
    const username = "hitesh" //scope= one() and two()

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //can't access as it has a scope of function two only

    two()

}

// one()


if (true) {
    const username = "hitesh" //scope => both if's
    if (username === "hitesh") {
        const website = " youtube" //scope => only recent if 
        // console.log(username + website); -> hitesh youtube
    }
    // console.log(website); -> reference error
}

// console.log(username); -> reference error

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


//Function Declaration (addone): The addone function is defined using a function declaration. This type of function is hoisted, meaning the JavaScript engine moves its definition to the top of the current scope during the compilation phase. As a result, you can call addone before its actual definition in the code.


//Function Expression (addTwo): The addTwo function is defined using a function expression and stored in a const variable. Unlike function declarations, function expressions are not hoisted. The variable addTwo is hoisted, but it remains undefined until the code execution reaches the function expression. If you try to call addTwo before it's defined, you'll get a TypeError because you're trying to invoke something that isn't yet a function.