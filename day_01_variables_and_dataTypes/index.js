// Activity 1 : Variable Declaration

// Task 1 : Declare a variable using var, assign it a number, and log the value to the console
// Solution

 var num1 = 5;
 console.log(num1);

// Task 2 : Declare a variable using let, assign it a string, and log the value to the console
// Solution

 let variableUsingLet  = "this is the 2nd task of day 1";
 console.log(variableUsingLet);

// Activity 2: Constant declaration

// Task 3 : Declare a variable using const, assign it a boolean, and log the value to the console
// Solution

 const isGood = true;
 console.log(isGood);

// Activity 3 : Data Types

// Task 4 : Create variables of different data types(number, string, boolean, object, array) and log each variable's type using typeof operator
// solution


let variable1 = 15;
const variable2 = "Hello brother!"
var variable3 = true;
let user = {
    name : "hello",
    age : 20,
    course : "B-Tech"
}
let arr = [0,2,8,4,6,9];

console.log(typeof variable1)
console.log(typeof variable2)
console.log(typeof variable3)
console.log(typeof user)
console.log(typeof arr)


// Activity 3 : Reassigning variable
// Task 5 : Declare a variable using let, assign it an initial value and reassign a new value, log both value to the console

 let task5 = 'How are you?';
 console.log("value of variable task5 while initial assigning :- ",task5);

 //reassigning
 task5 = 6
 console.log("valur of variable task5 after reassigning :- ",task5)

// Activity 5 : Understanding const
// Task 6 : Try reassigning a variable declared with const and observe the error

 const errorCheck = "JavaScript_challenge"
//  errorCheck = "30_days_JavaScript_challenge"


// Feature request 
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
console.log("-----------------------------");
//Try
const val = ["hello", 25 , {name : "Amit Verma"}, true,null, undefined,[0,3]];
console.log("variable :- ", " Data Type");
val.forEach((item ) => console.log(item, " :- ", typeof item))
 
// 2.  Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Try
console.log("---------------------");
 let reassignLet = "Initial Value with let";
 console.log("Initial Value (let):", reassignLet);
 reassignLet = "New Value with let";
 console.log("New Value (let):", reassignLet);

 const reassignConst = "Initial Value with const";
 console.log("Initial Value (const):", reassignConst);
 try {
    reassignConst = "New Value with const";
 } catch (error) {
     console.log("Error (const):", error.message);
 }
