// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
// soluiton

let library = {
    name : "Lucknow Public Library",
    books : [
        {
            title : "You have reached Sam.",
            author : "Dustin thou",
            year : 2021
        },{
            title : "Godan",
            author : "Munshi PremChand",
            year : 1936
        },{
            title: "A Suitable Boy",
            author : "Vikram Seth",
            year : 1993
        }
    ]
}

console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.
// solution

let name = library.name;
console.log("Library name :- ",name);
console.log("Available Books ------------------");
library.books.forEach( ( book , i) => console.log(i+1, book.title))