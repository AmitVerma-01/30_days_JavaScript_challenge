// Activity 2: Class Inheritance 


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

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the studentId. Create an instance of the Student class and log the Student Id.
// solution

class Student extends Person{
    constructor(name,age, studentID){
        super(name,age);
        this.studentID = studentID;
    }
    getStudentId(){
        return this.studentID;
    }
    // Task 4:  Override the greeting method in the student class to include the student id in the msg . log the overridden greeting msg.
    greeting(){
        console.log(`Hello ${this.name}, Your student ID is ${this.studentID}`);
    }
}

const student1 = new Student("Aditya", 7, 5)

console.log(student1);
const studentID = student1.getStudentId();
console.log(studentID);

// Task 4: Override the greeting method in the student class to include the student id in the msg . log the overridden greeting msg.
// solution

student1.greeting()