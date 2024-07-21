// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this function.
// solution

let book = {
    title : "You Have reached Sam!",
    author : "Dustin Thao",
    year : 2021,
    bookInfo : function(){
        return `${this.title} by ${this.author}`
    },
    updateYear : function (year){
        this.year = year;
    }
}

console.log(book.bookInfo());

// Task 3: Add a mehtod to the book object that takes a parameter (year) and updates the book's year property, then log th eupdated object
// SOlution

book.updateYear(2020)
console.log(book);