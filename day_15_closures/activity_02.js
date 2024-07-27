// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call;
// solution

function createIdGenerator(){
    let ID = 0

    return function(){
        ID +=1;
        return ID;
    }
}

const generateID = createIdGenerator()

console.log(generateID());
console.log(generateID());
console.log(generateID());
console.log(generateID());


// Task 4: Create a closure that captures a user's name and returns a function that greets user by name.
// solution

const greeting= (username) => {
    return function(){
        console.log("Hello, Mr/Ms "+username);
    }
}

const greet = greeting("Amit")

greet();
