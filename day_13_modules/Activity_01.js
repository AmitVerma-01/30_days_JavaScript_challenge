// Activity 1: Creating and Exporting Modules

// Task 1: Create  Module that exports a function to add two numbers. Import and use this module in an another script.
// soltuion

function addNumber(a,b){
    return a+b;
}

// module.exports = addNumber;

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// solution

const person = {
    name : "Amit Verma",
    age: 20,
    college : "BBD University",
    changeName(name){
        this.name = name;
    },
    changeCollege(collegeName){
        this.college = collegeName;
    },
    changeAge(age){
        this.age = age;
    }

}

module.exports = {person,addNumber};