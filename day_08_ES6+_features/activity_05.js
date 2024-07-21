// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// solution 

const name = "Amit Verma"
const age = 20

const person = {
    name,
    age,

    greet(){
        console.log(`Hello guys, I am ${this.name}, I am ${this.age} years old.`);
    }
}

console.log(person);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
// solution


const p2 = {
    name,
    age,
    ["isAdult"] : 18<age,
    ['say' + 'Goodbye'](){
        console.log("bye bye Guys");
    }
}

console.log(p2);

p2.sayGoodbye()