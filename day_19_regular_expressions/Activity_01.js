// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a single pattern (e.g., match all the occurrences of the word "JavaScript" in a string). Log the matches.
// Solution 

const regex = /JavaScript/g
const string = "JavaScript is now a most popular language in Tech Industry, JavaScript is not just use for frontend, JavaScript is also use in backend as well in these days."

const matches = string.match(regex)

console.log(matches);

// Task 2: Write a regular expression to match all the digits in a string. Log the matches.
// Solution

const  regexForDigits = /\d+/g
const  regexForDigits1 = /[0-9]/g
const text = "My phone number is 123-456-7890 and my office extension is 9876.";
console.log(text);
const result0 = text.match(regexForDigits)
const result1 = text.match(regexForDigits1)
console.log(result0);
console.log(result1);