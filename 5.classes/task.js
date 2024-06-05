class Book {
    constructor(author, title, releaseDate, pageCount) {
        this.author = author;
        this.title = title;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
    }
}

class DetectiveBook extends Book {}
class FantasticBook extends Book {}
class NovelBook extends Book {}
class Magazine extends Book {}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBookBy(property, value) {
        const book = this.books.find(book => book[property] === value);
        return book ? book : null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.title === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return null;
    }
}
