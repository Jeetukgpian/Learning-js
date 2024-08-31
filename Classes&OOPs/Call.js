function SetUsername(username) {
    // Simulate complex database calls or operations to set the username
    this.username = username;
    console.log("called");  // Log to indicate that SetUsername has been executed
}

function createUser(username, email, password) {
    // Use the call method to execute SetUsername in the context of the current object
    SetUsername.call(this, username);
   
    // Set the remaining properties directly
    this.email = email;
    this.password = password;
}

// Create a new user by calling the createUser function with the new keyword
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the newly created user object to the console
console.log(chai);
