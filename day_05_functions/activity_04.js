// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// solution

const productOfTwoNumbers = (num1 , num2 = 5) => {
    return num1 * num2;
}

let result = productOfTwoNumbers(10,1)
console.log(result);


// Task 8: Write a function that takes a person's name and age and return a greeting message . Provide a default value for the age.
// Solution

function greetingMessage( name, age = 18){
    console.log(`Hello!, Mr/Mrs ${name}. Nice to meet you, good to know you that you have successfully complete ${age} years of your life`);
}

greetingMessage("Amit");
