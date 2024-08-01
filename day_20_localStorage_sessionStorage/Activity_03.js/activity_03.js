// Task 5: Write a script to save a string value to sessionstorage and retrieve it. Log the retrieved value.
// Solution

const str = "hello guys, how are you."

sessionStorage.setItem("str",str);

const retrievedValue = sessionStorage.getItem('str');
console.log(retrievedValue);

// Task 6: Write a Script to save an object to the sessionStorage by converting it to a JSON string. Retrieve and parse the ibject, then log it.
// solution

const obj = {
    name : "amit",
    college : "BBD",
}

sessionStorage.setItem('obj' , JSON.stringify(obj))
const retrievedObj = JSON.parse(sessionStorage.getItem('obj'))
console.log(retrievedObj);