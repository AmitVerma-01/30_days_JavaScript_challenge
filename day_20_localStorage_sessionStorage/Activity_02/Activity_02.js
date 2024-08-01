function print(){
    const user = localStorage.getItem("user")
    console.log(user);
    if(user){
        const user1 = JSON.parse(user)
        document.getElementById('logMsg').innerText=`Welcome, ${user1.name}, Your email id is : ${user1.email}`
    }
}
print()
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
let name,email
nameInput.addEventListener("change",(e)=>{
    name = e.target.value
})

emailInput.addEventListener("change",(e)=>{
    email = e.target.value
})

const btn = document.getElementById('btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    userDetails = {
        name,email
    }
    localStorage.setItem('user',JSON.stringify(userDetails))
    print()
})

// Task 4 : Write a script to remove an item from localStorage. Log the LocalStorage content before and removal.
console.log("before removal :",localStorage);
localStorage.removeItem('obj')
console.log("After removal :",localStorage);