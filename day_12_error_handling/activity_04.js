// Activity 4: Error handling in promises

// Task 6: Create a Promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
// Solution

function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("Promise is not completed")
        }, 1000);
    })
}

promise1()
.then(()=>{
    console.log("promise is resolved not");
})
.catch((e)=>{
    console.log(e);
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log an appropriate error message.
// Solution

async function errorHandling(){
    try {
        const res = await promise1()
    } catch (error) {
        console.log(error);
    }
}
errorHandling()