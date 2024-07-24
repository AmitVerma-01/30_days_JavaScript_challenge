// Activity 5: Graceful Error Handling in fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.
// Solution

fetch("https://www.example13264.org/4598")
.then((data)=>{
    console.log("data");
    console.log(data);
})
.catch((e)=>{
    console.log(e.message);
})

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
// Solution

async function fetchData(){
 try {
    const data = await fetch("https://www.example13264.org/4598")
    console.log(data);
 } catch (error) {
    console.log(error.message);
 }   
}

fetchData()