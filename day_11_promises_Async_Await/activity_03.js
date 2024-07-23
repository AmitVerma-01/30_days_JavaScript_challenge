// using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// solution

function promise1() {
  return new Promise((resolve) => {
    resolve("Async promise 1 is resolved using async await");
  });
}

async function promiseResolved() {
  const data = await promise1();
  console.log(data);
}


promiseResolved();

// Task 5: Write an async function that handles a rejects promise using try-catch and logs the error meesage to the console.
// solution

function promise2(){
  return new Promise((res,rej)=>{
    rej("Error while resolving promise")
  })
}

const promiseResolved1 = async ()=>{
  try {
    const data = await promise2();
  } catch (error) {
    console.log(error);
  }
} 

promiseResolved1()