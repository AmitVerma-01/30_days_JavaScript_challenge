// Activity 3: Custom Error Objects

// Task 4: create a custom error class that extends the in-built Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Solution 

class extendedErrorClass extends Error{
    constructor(message,age){
        super(message);
        this.age=age;
        this.name="ageError";
    }
}

function isAdult(age){
    try {
        if(age<18)
            throw new extendedErrorClass('You are not adult, ',age)
        console.log("You are adult");
    } catch (error) {
        console.log('Error message: ',error.message, error.age);
    }
}

isAdult(17)

// Task 5: Write a function that validates user input(e.g., checking if a string is empty) and throws a custom error is the validation fails. handle the custom error using try catch block.
// solution

class formValidationError extends Error{
    constructor(message,name,email,password){
        super(message);
        // this.username=name
        // this.password=password
        // this.email=email
        this.name="inputError";
    }
}

let name='Amit Verma'
let email=''
let password = '12345678'

function formValidation(name,email,password){
    try {
        if(name=='' || email=='' || password=='')
            throw new formValidationError('All inputs required')
    } catch (error) {
        console.log(error.name,error.message);
    }
}
formValidation(name,email,password)