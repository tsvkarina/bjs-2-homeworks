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

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("title", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).title); 

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);
