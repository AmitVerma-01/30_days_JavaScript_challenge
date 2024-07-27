// Activity 1: Userstanding Closures

// TAsk 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
// soltuion

function outerFuncion(){
    const msg = "I am a Outer function variable"

    function innerFunction(){
        console.log("Inner function print: ",msg);
    }
    return innerFunction;
}

const fn = outerFuncion();

fn();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of teh counter.
// Solution

const counterFunction = ()=>{
    let counter = 0;
    function increment(){
        counter++;
    }
    function getValue(){
        return counter
    }

    return {increment , getValue}
}

const fxn = counterFunction()

console.log(fxn.getValue());
fxn.increament()
console.log(fxn.getValue());
fxn.increment()
fxn.increment()
console.log(fxn.getValue());