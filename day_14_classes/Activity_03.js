// Activity 3: Static Methods and Properties

// TAsk 5: Add a static method to the Person class that returns a generic greeting msg. Call this method method without creating an instance of this class and log the message.
// solution

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static greeting(){
        console.log(`Hello! I am a static greeting method,`);
    }
}

Person.greeting()

// Task 6: Add a static property to the Student class to keep track of the number of the students created. Increament this property in the constructor and log the total number of students.
// solution

class Student extends Person{
    static studentCount = 0;
    constructor(name,age, studentID){
        super(name,age);
        this.studentID = studentID;
        Student.studentCount++;
    }
    getStudentId(){
        return this.studentID;
    }
    greeting(){
        console.log(`Hello ${this.name}, Your student ID is ${this.studentID}`);
    }

    static getStudentCount(){
        console.log(`Total number of students: ${Student.studentCount}`);
    }
}

const s1 = new Student("adi",7,7)
const s2 = new Student("adi",7,7)
const s3 = new Student("adi",7,7)
const s4 = new Student("adi",7,7)

Student.getStudentCount()