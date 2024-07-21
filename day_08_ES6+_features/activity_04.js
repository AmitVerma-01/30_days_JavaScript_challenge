// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
//  solution

function product(num1 , num2=1){
    return num1*num2;
}

let result = product(5)
console.log("without second parameter: ",result);
result = product(5,6)
console.log("with second parameter: ",result);