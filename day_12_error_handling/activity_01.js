// Activity 1: Basic Error Handling with Try-catch 

//Task 1: write a function that intentionallu throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
//solution
console.log("hello");
function throwAnError(){
    throw new Error("Failed to get data from the function");
}
function fetch1(){
try {
    throwAnError()
} catch (error) {
    console.log(error.message);
}
}

fetch1()

// Tsk 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use try-catch block to handle the error and log the error msg to the console.
// Solution 


function divide(a,b){
    if(b===0)
        throw new Error("Denominator can't be Zero ")
    return a/b;
}

try {
    divide(10,0)
} catch (error) {
    console.log("Error Message: ",error.message);
}