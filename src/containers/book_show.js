import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/action_add_book'


class BookShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookToAdd: {}
        }

        this.handleAddBook = this.handleAddBook.bind(this)
    }
    componentDidMount(){
        
        const book = this.props.book

        this.setState({
            bookToAdd: {
                title: book.title,
                author: book.author,
                pageCount: book.pageCount
            }
        })

    }
    handleAddBook(){
        addBook(this.state.bookToAdd)
    }

    render() {

        const book = this.props.book

        return (
            <div className="add-new-book">
            <ul className="searched-book">
                <li id="cover"><img src={book.imageLinks.smallThumbnail} alt={book.title} /></li>
                <div className="book-details">
                    <li><h1>{book.title}</h1></li>
                    <li><h3>{book.author}</h3></li>
                    <li><small>Pages: {book.pageCount}</small></li>
                    <li><p>Description: {book.description}</p></li>
                </div>
                <button id="add-button" onClick={this.handleAddBook}>Add Book</button>
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.selectedBook
    }
}

export default connect(mapStateToProps)(BookShow)