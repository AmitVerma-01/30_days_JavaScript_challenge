// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of the another function. Use a closure to store the results of previous computations.
// solution

function memoize(fn) {
    const cache = {};

    return function(...args) {
      const key = JSON.stringify(args);

      if (cache[key]) {
        console.log("Fetching from cache for:", args);
        return cache[key]; 
      }
  
      console.log("Computing result for:", args);
      const result = fn(...args); 
      cache[key] = result; 
      return result;
    };
  }
  
  // Example function to memoize
  function add(a, b) {
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(1, 2)); 
  console.log(memoizedAdd(1, 2)); 
  console.log(memoizedAdd(2, 3)); 
  console.log(memoizedAdd(2, 3)); 
  

// Task 8:  Create a memoized version of a function that calculates the factorial of a number.
// solution
console.log("-------task 8------");

function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        console.log(`Fetching from cache for: ${args}`);
        return cache[key];
      }
  
      console.log(`Computing result for: ${args}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(6));
  console.log(memoizedFactorial(6));
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(5));
  