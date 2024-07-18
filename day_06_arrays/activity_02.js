// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of array and log the updated array.
// solution

let arr = [1, 2 , 3, 4, 5]
arr.push(6)
console.log('after push operation ',arr);

// Task 4: Use the pop method to remove the last element fromt the array and log the updated array.
// solution

arr.pop()
console.log("after pop operation ", arr);

// Task 5: use the shift method to remove the first elememt from the array and log the updated array.
// solution 

let n = arr.shift();
console.log('after shift operator ', arr);
console.log('shift value ', n);

// Use the unshift method to add a new number to the beginning of the array and log the updated array.
// solution 

n = arr.unshift(9)
console.log('after unshift operator ', arr);
console.log("unshift value ",n);

