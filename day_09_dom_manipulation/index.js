// Activity 1: Selecting and manipulating elements

// Task 1: Select an HTML element by its ID and change its text content.
// Solution

const hello = document.getElementById('hello')
hello.innerText="this text is insert by js"

// Task 2: Select an HTML element by its class and change its background color.
// Solution

// const bgChangeElement = document.querySelector('.bgChange')
const bgChangeElement = document.getElementsByClassName('bgChange');
bgChangeElement[0].style.backgroundColor = "yellow";

//Activity 2: Creating and Appending Elements
//Task 3: Create a new div element with some text content and append it to the body.
// solution

let newEle = document.createElement('div')
newEle.innerText="I am a div, which is created and appended by js(dom manipulation)."

document.querySelector('body').appendChild(newEle)

//Task 4: Create a new li element and add it to an existing ul list.
// Solution

let ulElement = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText="NodeJs (Appended by Dom manipulation)";
ulElement.appendChild(newLi);


// Activity 3: Removing Elements
// Task 5: Select and HTML element and remove it from the DOM.
// Solution 

document.getElementById('rem').remove();

//Task 6: Remove the last element of a specific HTML element
// solution

const element = document.querySelector('ol')
element.removeChild(element.lastElementChild)

// Activity 4: Modifiying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes.
// solution 

let img = document.querySelector('img')
img.setAttribute('src','Man2.jpg')

// Task 8: Add and remove a CSS class to/from an HTML element.
// solution

let pElement = document.querySelector('p')
pElement.style.removeProperty('border')
pElement.style.setProperty('background-color','pink')


// Activity 5: Event handling
// Task 9: Add a click event listener to a button that changes the text of a paragraph
// solution

const button = document.querySelector('button')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    pElement.innerText="paragraph content is changed"
})

// task 10 :  Add a mouseover event listener to an element that changes its border color.
// solution

let borderElement = document.getElementById('borderColorChange')

borderElement.addEventListener('mouseover',(e)=>{
    e.target.style.borderColor='red'
})
