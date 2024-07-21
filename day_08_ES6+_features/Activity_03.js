// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create new array thar includes all the elements of an existing array plus addition elements, and log the new array to the console.
// soluiton

let existingArray = [1,2,3,4,5,6]
let newArray = [...existingArray,7,8,8,9]

console.log("existingArray: ",existingArray);
console.log("newArray: ",newArray);


//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// solution

function sum(...args){
   return args.reduce( (total,number) => total + number,0)
}

const result = sum(5,9,7,32,9,9,8)
console.log(result);