// Activity 2: Destructuring 

// Task 3: Use array destructuring to extract the first and second elements from an array of the numbers and log them to the console.
// solution

let numsArray = [7,0,8,1,0,5,1,1,2,6]
const [first , second] = numsArray; 

console.log(first);
console.log(second);

// Task 3: Use object destructuring to extract the title and author froma book object and log them to the console.
// SOlution


let book = {
    title : "A Suitable Boy",
    author : "Vikram seth",
    year : 1993
}

const {title} = book
const {author} = book

console.log("title:" ,title );
console.log("author:" ,author );
