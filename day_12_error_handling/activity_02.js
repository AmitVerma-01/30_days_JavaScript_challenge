// Activity 2: Finally block

// Task 3: Write a script that includes a try-catch block and a finally block. log message in the try, catch and finally blocks to observe the execution flow.
// SOlution

function divide(a,b){
    if(b==0)
        throw new Error('Denominator can not be zero.')
    return a/b;
}

function getDivideValue(a,b){
    try {
        divide(a,b)
    } catch (error) {
        console.log("Error message: ",error.message);
    }finally{
        console.log("This function is executed now");
    }
}

getDivideValue(10,0)