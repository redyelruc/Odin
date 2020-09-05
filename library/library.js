myLibrary = [];

const genre =["biography", "comic", "crime", "children's", "educational", "graphic novel", "historical fiction",
                 "history", "literary classic", "poetry", "political thriller", "psychology",
                 "religion", "romance", "sport", "teen", "thriller", "true crime", "unspecified", "young adult"
                ]

function Book(title, author, pages, read = true, fiction = true, genre = "unspecified", review = "Not yet reviewed", stars = 3) {
    this.title = title;
    this.author = author;
    this.pages = Math.abs(pages);
    this.read = read;
    this.fiction = fiction;
    this.genre = genre;
    this.review = review;
    this.stars = stars;
}

Book.prototype.toggleRead = function() {
    this.read = !(this.read);
}

Book.prototype.setStars(stars){
    if (stars >= 0 && stars <= 5){
        this.stars = stars;
        return "success";
    } else {
        return "not a valid rating";
    }
}


function isBookInLibrary(book){
    return myLibrary.some(libraryBook => libraryBook.title === book.title);
}
  
function addBookToLibrary(book){
    if (isBookInLibrary(book) === false){
        myLibrary.push(book);
        return "success";
    } else{
        return "already in library";
    }
}

function removeBookFromLibrary(book){
    let indexToRemove = myLibrary.indexOf(book);
    delete myLibrary[indexToRemove];
    return myLibrary;
}



let newBook = new Book("Brave New World", "Aldous Huxley", 250, false, true, genre[8]);
myLibrary = addBookToLibrary(newBook);

