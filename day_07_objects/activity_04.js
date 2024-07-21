// Activity 4: The this keyword

// Task 7: Add a method to the book object that uses this keyword to return a string with the book's title and year, and log the result to console.
//  solution

let book = {
    title : "A Suitable Boy",
    author : "Vikram seth",
    year : 1993,
    bookInfo : function(){
        return `${this.title} published in ${this.year}`
    }
}

let result = book.bookInfo();
console.log(result);