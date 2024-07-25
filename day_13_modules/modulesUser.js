const { greet, subtraction } = require('./Activity_02.js');
const {addNumber , person} = require('./Activity_01.js');
const { college, course, generateRandomNumber, name, sayHello } =  require('./Activity_03.js');
import isAdult  from './Task_4.js'

// task 1
console.log("-------------------------------From task 1------------------------------------");
const a = 2;
const b = 6;

const result = addNumber(a,b)

console.log(`Sum of ${a} and ${b} is ${result}`);

// task 2
console.log("-------------------------------From task 2------------------------------------");

console.log(person.name);
console.log(person.age);
console.log(person.college);

person.changeName("Piyush Verma")
person.changeAge(25)
person.changeCollege("IIT Delhi")

console.log(person.name);
console.log(person.age);
console.log(person.college);


console.log("-------------------------------From task 3------------------------------------");

greet("Amit")
const res = subtraction(10,6)
console.log( `${a} - ${b} = ${res}`);


console.log("-------------------------------From task 4------------------------------------");

isAdult(40)


console.log("-------------------------------From task 5------------------------------------");

let userName = name
sayHello(userName);

generateRandomNumber();
console.log(college,course);