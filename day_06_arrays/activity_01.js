// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
// Solution

let arr = [1,2,3,4,5];
console.log(arr);

// using array construtor 
let newArray = new Array(1,2,3,4,5);
console.log(newArray);

// using array.of method

let arrayOf = Array.of(1,2,3,4,5);
console.log(arrayOf);

// using array.from method

let arrayFrom = Array.from([1,2,3,4,5])
console.log(arrayFrom);

// using spread operator 

let arraySpread = [...[1,2,3,4,5]];
console.log(arraySpread);

// using array.fill()

let arrayFill =new Array(5).fill(0).map((_,i) => i+1)
console.log(arrayFill);


// Task 2: Acces the first and last elements of the array and log them to the console.
// solution 

let firstElement = arr[0]
let lastElement = arr[arr.length-1]

console.log(firstElement , lastElement);
