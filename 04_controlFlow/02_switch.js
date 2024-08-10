//Syntax 
/*
    switch (key) {
        case value:
            
            break;

        default:
            break;
    }
*/

const month = "march";  // Variable to hold the current month

// Switch statement to determine which month is selected
switch (month) {
    case "jan":
        console.log("January");  // Executes if month is "jan"
        break;
    case "feb":
        console.log("February");  // Executes if month is "feb"
        break;
    case "march":
        console.log("March");  // Executes if month is "march"
        break;
    case "april":
        console.log("April");  // Executes if month is "april"
        break;
    default:
        console.log("Default case match");  // Executes if no case matches
        break;
}

// Output: "March"
