// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also sivisible by 400) and log the result to the console.
// Solution

let year = 200;

if(year % 4 === 0){
    if(year % 100 === 0 && year % 400){
        console.log("Not a Leap Year");
    }else{
        console.log("Leap Year");
    }
}else{
    console.log("Not a Leap Year");
}