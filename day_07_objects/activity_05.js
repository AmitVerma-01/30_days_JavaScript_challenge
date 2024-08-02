// Activity 5: object Iteration

// Task 8: Use a For..in loop to iterate over the properties of the book object and log each property and its value.
// solution 

let book = {
    title : "You Have reached Sam!",
    author : "Dustin Thao",
    year : 2021    
}

for(let key in book){
    console.log(`${key} :- ${book[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
// solution

console.log("keys",Object.keys(book));
console.log("values",Object.values(book));
