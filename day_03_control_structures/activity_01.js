// Activity 1: if-else Statements

// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.
// solution

let num1 = 34;

if(num1 > 0){
    console.log(num1 ," is a positive number")
}else if(num1 < 0 ){
    console.log(num1 ," is a negative number")
}else{
    console.log(num1, " is zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// solution

let age = 18;

if(age >= 18){
    console.log("You are eligible for voting");
}else{
    console.log("You are age is below 18. Not eligible to vote.");
}