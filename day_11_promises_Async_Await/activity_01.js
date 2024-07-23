// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// solution

function promise1(){
    return new Promise( () => {
        setTimeout(() => {
            console.log("promise 1 is resolved now.")
        }, 2000);
    })
}
promise1();

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// solution

function promise2 (){
    return new Promise( (resolve,reject) => setTimeout(() => {
        reject( new Error("error occur while resolving promise"))
    },2000))
}

promise2()
.then((res) => {
    console.log(("Promise 2 is resolved"));
}).catch((e)=>{
    console.error("Caught an error:",e.message);
})

 