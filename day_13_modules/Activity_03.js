// ACtivity 3: 

// Task 5:  create a module that exports multiple constants and functions. import the entire module as an object in another script and use its properties.
// solution

const name = "Amit Verma"
const college = "BBD University"
const course = "B-Tech"

const sayHello = (name) => {
    console.log(`Hello ${name}`)
}

const generateRandomNumber = ()=>{
    return Math.floor(Math.random()*10);
}

module.exports = {
    name, college , course , sayHello, generateRandomNumber
}