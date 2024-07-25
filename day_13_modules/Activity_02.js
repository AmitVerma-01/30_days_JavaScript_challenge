// Activity 2: Named and Default exports

// Task 3: Create a module that exports multiple named exxports. Import and use these funciton in another script.
// solution

function greet(name){
    console.log("Hello ",name);
}

function subtraction(a,b){
    return a-b;
}


module.exports = {
    greet , subtraction
}

