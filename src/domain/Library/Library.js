class Library {
    constructor() {

        if(!Library.instance) {
            Library.instance = this;
            this.books = [];
        }
        return Library.instance;
    }

    addBook = (book) => {
        this.books.push(book)
    }
}

const instance = new Library()

export default instance;