// Activity 5: Higher-Order Function 

// Task 9: Write a High-Order Function that takes a function and a number, calls the function that many time. 
// solution

function cbFunctionCall(fn, n) {
    while (n--) {
        fn();
    }
}

function greetingMessage() {
    console.log("Hello!, EveryOne");
}

cbFunctionCall(greetingMessage, 5)

//Task 10: wrtie a high-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
// solution

function square(n) {
    return n * n;
}

function doubleTheNumber(n) {
    return 2 * n;
}

function mainFunctin(fn1, fn2, n) {
    n = fn1(n);
    console.log("after appling first function ", n);
    n = fn2(n)
    console.log("after appling second function ", n);
}

mainFunctin(square, doubleTheNumber, 5);