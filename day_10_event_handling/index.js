// Activity 1: Basic Event Handling
// Task 1: Add a click listener to a button that changes the text content of a paragraph.
//solution

let changeParaButton = document.getElementById('paraChangeButton')
changeParaButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const para = document.getElementById("para") 
    para.innerText="This content is inserted in this paragraph using addEventListener on this button"
})


// Task 2: Add a double-click event listener to an image that toggles its visibility.
// solution

const image = document.getElementById('imageToToggle')
console.log(image)
image.addEventListener('dblclick',(e)=>{
    if(e.target.style.filter==="blur(10px)")
        e.target.style.filter="none"
    else
        e.target.style.filter="blur(10px)"

})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
// solution

const bgChangeElement = document.getElementById('bgChangeElement')
bgChangeElement.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor="yellow";
})

// Task 3: Add a mouseout event listener to an element that resets its background color.
// solution
bgChangeElement.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor="aqua";
})

// Activity 3: Keyboard Events 
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
// soluiton

 inputForKeydownEvent = document.getElementById('inputForKeydownEvent');
document.addEventListener('keydown',(e)=>{
    inputForKeydownEvent.value = e.key
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
// solution 

const paraInserted = document.getElementById('paraInserted')
document.getElementById('typeToPara').addEventListener('keyup',(e)=>{
    paraInserted.textContent = e.target.value;
})

// Activity 4: Form events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
// solution

let formFields = ['name','email','password','address'];

const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData={};

    formFields.forEach((field)=>{
        formData[field] = document.getElementById(field).value
    } )

    console.log("Form Data: ", formData);
})


// Task 8: Add a change event listener to a select dropdown that display the selected value in a paragraph.
// solution

const dropDownContent = document.getElementById('dropDownContent');
const dropdown = document.getElementById('dropDown')

dropdown.addEventListener('change',(e)=>{
    dropDownContent.textContent = e.target.value
})


// Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// solution

const list = document.getElementById('list')
list.addEventListener('click',(e)=>{
    if(e.target && e.target.tagName=="LI")
        console.log(e.target.textContent);
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
// Solution


const ol = document.getElementById('ol')
let listItemNum=0;
function addListItem(){
    listItemNum++;
    let listItem = document.createElement("li")
    listItem.innerText=`Item ${listItemNum}`
    ol.appendChild(listItem);
}

const addItem = document.getElementById('addItem')
addItem.addEventListener('click',(e)=>{
    e.preventDefault();

    addListItem();
})

ol.addEventListener("click",(e)=>{
    if(e.target && e.target.tagName=='LI'){
        console.log("click Item: ",e.target.innerText);
    }
})