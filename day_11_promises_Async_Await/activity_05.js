// Concurrent Promises

// Task 8: Use Promises.all to wait from multiple promises to resolve and then log all their values.
// solution

const promise2 = new Promise((resolve) => setTimeout(() => resolve("hello i am from promise 2"),2000));
const promise1 = new Promise((resolve) => setTimeout(() => resolve("hello i am from promise 1"),5000));
const promise3 = new Promise((resolve) => resolve("hello i am from promise 3"));

Promise.all([promise1,promise2,promise3])
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.error(error);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// solution

Promise.race([promise1,promise2,promise3])
.then(data => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
  });