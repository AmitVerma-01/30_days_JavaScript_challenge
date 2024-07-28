// Activity 3: String Manipulation with recursion

// Task 5: Write a recursive function to reverse a string. Log the result for few test cases.
// Solution

function reverseString(str){
    if(str.length <= 1){
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

const testCases = [
    "Amit",
    "Verma",
    "Javascript",
    "ABBSBBA",
    "t",
    "typescript"
]

testCases.forEach((str) => console.log( reverseString(str) ))

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// solution

testCases.forEach((str) => console.log(str === reverseString(str)))