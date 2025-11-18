/*
=== INHERITANCE EXERCISE ===
//
// Part 1:
//
// The book1 object is created from the Book class.
// When we log book1 to the console, it looks like this:
//
// Book {
//   title: 'The Lord of The Things',
//   releaseYear: 1940,
//   price: 11.99,
//   author: 'J.R.Rolkein',
//   pages: 20000
// }
//
// After running the setTitle method on book1, what should we see when we log book1 again?
//
// Part 2:
//
// There is a bug in the code related to the album1 object.
// Fix the code so that the album1 properties show the correct values when logged to the console.
//
*/

class Media {
    constructor(title, releaseYear, price) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.price = price;
    }
}

class Book extends Media {
    constructor(title, releaseYear, price, author, pages) {
        super(title, releaseYear, price);
        this.author = author;
        this.pages = pages;
    }

    getTitle () {
        return this.title;
    }

    setTitle (newTitle) {
        this.title = newTitle;
    }
}

class MusicAlbum extends Media {
    constructor(title, releaseYear, price, artist, tracks) {
        super(title, releaseYear, price);
        this.artist = artist;
        this.tracks = tracks;
    }
}

const book1 = new Book("The Lord of The Things", 1940, 11.99, "J.R.Rolkein", 20000);
console.log(book1);
book1.setTitle('The Halfling')

const album1 = new Media("The Bright Side of the Sun", 2068, 9.99, "Pink Flamingo");
console.log(album1.title);
console.log(album1.artist);
