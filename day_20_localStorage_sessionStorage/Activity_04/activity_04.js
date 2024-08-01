// Task 7: Create a simple form that saves user input to sessionStorage when submit and display the saved data on page when page load.
// solution
const h3 = document.querySelector('h3')

function print(){
    const user = sessionStorage.getItem('user')
    if(user){
        const userDetails = JSON.parse(user)
        h3.innerText=`Welcome ${userDetails.name}, your email Id: ${userDetails.email}`
    }
}

print()

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

let name,email;

nameInput.addEventListener('change',(e)=>{
    name=e.target.value;
})
emailInput.addEventListener('change',(e)=>{
    email=e.target.value;
})

document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault()
    const userDetails = {name,email}
    sessionStorage.setItem('user',JSON.stringify(userDetails))
    print()
})