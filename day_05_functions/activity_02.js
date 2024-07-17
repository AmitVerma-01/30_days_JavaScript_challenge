// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// Solution

function getGreaterNumber(a,b){
    a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)
}

getGreaterNumber(10,5)

//Task 4: Write a function expression to concatenate two strings and return the result.
// solution

function concatenateTwoStrings(a,b){
    return a+b;
}

result = concatenateTwoStrings("hello! ","world")
console.log(result);