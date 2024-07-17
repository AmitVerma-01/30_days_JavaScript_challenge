// Activity 3: Arrow Function

// Task 5: Write a arrow function to calculate the sum of two numbers and returnt he result
//solution

const getSum = (a,b) => {
    return a+b;
}

console.log(getSum(10,5));

// Task 6: Write  a arrow function to check if a string contains a specific character and return a  boolean value.
// solution

const checkStringIncludesACharOrNot = (str , ch) => {
    return str.includes(ch);
}

console.log(checkStringIncludesACharOrNot("Amit" ,'i'));