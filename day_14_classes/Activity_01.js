// Activity 1: Class Definition

// Task 1: Define a class person with properties name and age, and a method to return a greeting message. create an instance if the class and log the greeting msg.
// solution 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Hello ${this.name}, Nice to meet you. `
    }

    // Task 2
    updataAge(age){
        this.age=age;
        console.log(`Age is updated to ${age}`);;
    }
}
let user1 = new Person("Amit", 20)
const msg = user1.greeting()
console.log(msg);

user1.updataAge(22)