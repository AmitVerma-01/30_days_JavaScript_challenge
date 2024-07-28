// Activity 1: Basic Recursion 

console.log("--------------Task 1---------------");
// task 1:  Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
// solution

function factorial(n){
    if(n==1 || n==2){
        return n;
    }
    return n * factorial(n-1);
}

const testArray = [4,2,3,6,5,1,7]

testArray.forEach((num) => {
    const result = factorial(num)
    console.log(`Factorial of ${num} is: ${result}`);
})

console.log("--------------Task 2---------------");
// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for the few test cases.
// solution 

function FibonacciNum(n){

    if(n<=1){
        return n;
    }
    return FibonacciNum(n-1)+FibonacciNum(n-2)
}

testArray.forEach((num) => {
    const result = FibonacciNum(num)
    console.log(`${num}th fibonacci number is  ${result}`);
})