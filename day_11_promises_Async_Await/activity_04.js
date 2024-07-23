// Activity 4: Fetching data form an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// solution

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    // console.log(data);
    const userNames = data.map(user => user.name)
    return userNames
}).then((users)=>{
    console.log(users);
})
.catch(e => console.log(e))

// Task 7: Use fetch API to get data from a public API and log the response data to the console using async/await.
// solution

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const userNames = data.map((user)=>user.name)
    console.log(userNames);
}

getData()