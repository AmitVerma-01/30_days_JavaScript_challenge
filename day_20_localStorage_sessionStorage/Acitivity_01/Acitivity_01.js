// TAsk 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.

const key = document.getElementById('key')
const value = document.getElementById('value')

let keyValue,valueToSave;
key.addEventListener('change',(e)=>{
    keyValue = e.target.value
})
value.addEventListener('change',(e)=>{
    valueToSave = e.target.value
})

const btn1 = document.getElementById('btn1')
btn1.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.setItem(keyValue, valueToSave)
    document.getElementById('addMsg').innerText="Item added"
    setTimeout(()=>{
        document.getElementById('addMsg').innerText=''
    },2000)
})

let getKey = document.getElementById('getKey')
const btn2 = document.getElementById('btn2') 
let getKeyValue;
getKey.addEventListener('change',(e)=>{
    getKeyValue = e.target.value
})

btn2.addEventListener('click',(e)=>{
    e.preventDefault()
    const val = localStorage.getItem(getKeyValue)
    console.log(val);
    document.getElementById('displayPara').innerText = val
})

// Task 2: Write a Script to save an object to localStorage by converting it to a JSON String. Retrieve and parse the object, then log it,
// Solution

const obj = {
    name : "amit verma",
    age : 20,
    location : "Lucknow"
}

localStorage.setItem("obj", JSON.stringify(obj))

const retrievedObj = localStorage.getItem('obj')

console.log(JSON.parse(retrievedObj));