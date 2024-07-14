// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two condition and log the result to the console
// solution

let num1 = 5;
let num2 = 9;
let num3 = 5;

let result;
result = num1 <= num2 && num1 === num3;
console.log(result);

result = num2 < num1 && num1 == num3;
console.log(result);

result = num1 == num2 && num1 > num3;
console.log(result);

console.log("------------------");
// Task 12: Write a program that uses the || operator to combine two condition and log the result to the console.
// solution 

result = num1 <= num2 || num1 === num3;
console.log(result);

result = num2 < num1 || num1 == num3;
console.log(result);

result = num1 == num2 || num1 > num3;
console.log(result);

console.log("------------------");
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// solution 

result = !(num1 <= num2 && num1 === num3);
console.log(result);

result = !(num2 < num1 && num1 == num3);
console.log(result);

result = !(num1 == num2 && num1 > num3);
console.log(result);