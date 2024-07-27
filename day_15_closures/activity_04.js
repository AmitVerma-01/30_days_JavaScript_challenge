// Activity 4: Module pattern 

// Task 6: Use closures to create simple module for managing a collection of items. Implement methods to add, remove, and list items,


function booksModule(){
    let booksList = []

    function addBook({name,author}){
        booksList = [...booksList,{name,author}]
        console.log("Book Added successfully");
    }

    function removeBook(bookName){
        const newBooksList = booksList.filter((item) => item.name != bookName )
        // console.log(newBooksList);
        booksList=newBooksList; 
        console.log("Book removed succcessful", bookName);
    }

    function getBooksList(){
        if(booksList.length === 0 ){
            console.log("No books available. Please add Books");
            return;
        }
        booksList.forEach((book , i) => console.log(i,":-",book));
    }

    return {
        addBook,
        removeBook,
        getBooksList
    }

}

const library = booksModule()

// library.getBooksList()
library.addBook({name : "You have reached Sam", author : "Amit Verma"})
library.addBook({name : "the super boy", author : "Amit Verma"})
library.addBook({name : "superman", author : "Amit Verma"})
library.addBook({name : "Irom man", author : "Amit Verma"})
library.addBook({name : "Spider man", author : "Amit Verma"})
library.getBooksList()

library.removeBook("superman");
library.getBooksList()