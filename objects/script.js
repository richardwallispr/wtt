/*
=== INHERITANCE EXERCISE ===
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
book1.setTitle('The Halfling')

const album1 = new Media("The Bright Side of the Sun", 2068, 9.99, "Pink Flamingo");
