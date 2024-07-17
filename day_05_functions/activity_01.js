// Activity 1: Fuction Declaration

// Task 1: Write a function to if a number is even or odd and log the result to the console.
// solution 

function IsNumberOddOrEven(n){
    n % 2 ? console.log(n, " is Odd") : console.log(n, " is Even"); 
}
IsNumberOddOrEven(15)

// Task 2: Write a program to calculate the square of a number and return the result.
// solution

function squareOfANumber(n){
    return n*n;
}

let result = squareOfANumber(10);
console.log(result);