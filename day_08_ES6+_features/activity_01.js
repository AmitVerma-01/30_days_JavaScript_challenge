// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to console.
// solution

let person = {
    name : "Amit Verma",
    age : 20
}

let str = `Hello everyone, I am ${person.name}. I am ${person.age} years old.`

console.log(str);


// Task 2: Create a multi-line string using template literals and log it to the console.
// solution

let str1 = `
    Hello World!,
    I am Amit Verma, a final year Computer Science student,
    pursuing my b-tech from BBD University at Lucknow.
`

console.log(str1);