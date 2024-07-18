// Activity 3: Array Methods (Intermediate)

//Task 7: Use the map method to create a new array where each number is double and log the new array.
// solution

let arr = [1,2,3,4,5]
let newArr = arr.map( i => i*2 );
console.log(newArr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
// solution 
console.log(arr);
let arrWithEven = arr.filter( i => i%2 === 0)
console.log(arrWithEven);

// Task 9: use the reduce method to calculate the sum of all numbers in the array and log the result.
// solution

let i = 0;
let result = arr.reduce( (i , j) => i+j)
console.log(result);
