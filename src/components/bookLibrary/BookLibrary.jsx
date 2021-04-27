import React from 'react';
import AddBook from '../add/Add';
import BookComponent from '../book/Book';
import Book from '../../domain/Book/Book';
import Library from '../../domain/Library/Library';
import Search from '../search/Search';

class BookLibrary extends React.Component {
    constructor(props) {
        super(props);

        console.log(Library);

        Library.addBook(new Book("name1", "desc1", 10, "auth1"));
        Library.addBook(new Book("name2", "desc2", 10, "auth2"));
        Library.addBook(new Book("name3", "desc3", 10, "auth3"));
        Library.addBook(new Book("name4", "desc4", 10, "auth4"));



        this.state = {
            searchKey : "",
            
            books: Library.books
        }
    }

    addBook = (name, desc, count, author) => {
        // console.log(name)
        this.setState({
            books: this.state.books.push(new Book(name, desc, count, author))
        })
        // Library.addBook(new Book(name, desc, count, author))
    }

    searchHandler = (searchKey) => {



        this.setState({
            books: this.state.books.filter(book => book.name === searchKey)
        })
    }

    render() {
        // console.log("Books ",  this.state.books)
        return (
            <div>
                <AddBook addBook={this.addBook}></AddBook>
                <Search searchHandler={this.searchHandler}></Search>
                {this.state.books.map(book => <BookComponent name={book.name} desc={book.desc} count={book.count} author={book.author}></BookComponent>)}
            </div>)
    }
}

export default BookLibrary;