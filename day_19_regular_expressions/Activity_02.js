// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular ecpression to match all the words in a string that start with a capital letter. Log the matches.
// Solution

const regex = /\b[A-Z][a-zA-Z]*\b/g
const string = "JavaScript Is now a most Popular language in Tech Industry, JavaScript is not just use for frontend, JavaScript is also use in backend as well in these days."
const text = "Hello, my name is Amit Verma and I live in Lucknow City."
const matches = string.match(regex);
const matches1 = text.match(regex);
console.log(matches);
console.log(matches1);

// task 4: Write a regular expression to match all the sequences of one or more digits in a string. Log the matches.
// solution

const text1 = "My phone number is 123-456-7890 and my office extension is 9876. and here is count from 1 t0 9";
const regex1 = /\d+/g

const result1 = text1.match(regex1)

console.log(result1);