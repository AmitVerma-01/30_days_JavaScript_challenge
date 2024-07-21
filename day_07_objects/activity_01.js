// Activity 1: Object creation and Access

// Task 1: Create an Object representuing  a book with properties like title, author, and year, and log the object to the console.
// solution

let book1 = {
    title : "You Have reached Sam!",
    author : "Dustin Thao",
    year : 2021    
}

console.log(book1);

// object constructor

let book2 = new Object();
book2.title = "you have reached sam";
book2.author = "Dustin Thao"
book2.year = 2021

console.log(book2);

// Object constructor function

function MyObject(title, author, year){
    this.title=title
    this.author = author
    this.year = year
}

let obj = new MyObject("You have reached sam", "Dustin Thao",2021);

console.log(obj);

// Using Object.create()

obj = Object.create({});

obj.title="You have reached sam";
obj.author="Dustin Thao"
obj.year = 2021

console.log(obj);

// using object.assign()

let obj1 = Object.assign({},{
    title : "You Have reached Sam!",
    author : "Dustin Thao",
    year : 2021    
}
)

console.log(obj1);

// Task 2: Access and log the title and author propertiesof the book object.
// solution

let title = book1.title;
console.log(title);

let author = book1["author"];
console.log(author);