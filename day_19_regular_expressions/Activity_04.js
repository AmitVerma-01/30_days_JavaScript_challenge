// Activity 4: Assertions and Boundaries 

// Task 7: Write a regular expression to match a word only if it is at the beginning of the string. Log the matches
// Solution

const text = 'this is a testing sentences'
const regex = /^\w+/

const result = text.match(regex)
console.log(result[0]);

// Task 8: Write a regular expression to match a word only if it is at the end of the string. Log the matches
const regex1 = /\b\w+\b$/
const result1 = text.match(regex1)
console.log(result1[0]);