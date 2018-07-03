import React, { Component } from 'react'
import { addBook } from '../actions/action_add_book'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class FoundBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookToBeAdded: {}
        }
        
    }

    handleAddBook(book) {
        const bookToBeAdded = {
                title: book.title,
                author: book.authors[0],
                publisher: book.publisher,
                cover: book.imageLinks.smallThumbnail,
                pageCount: book.pageCount
            }

        this.props.addBook(bookToBeAdded)
    }
    render(){
        
        return (
            this.props.bookData.map((current, index) => {
            const book = current.items[0].volumeInfo

            return( 
                    <ul key={index} className="searched-book">
                        <li id="cover" key={book.imageLinks.smallThumbnail}><img src={book.imageLinks.smallThumbnail} alt={book.title} /></li>
                        <div className="book-details">
                            <li key={book.title}><h3>{book.title}</h3></li>
                            <li key={book.authors[0]}><h5>{book.authors[0]}</h5></li>
                            <li><small>{book.categories[0]}</small></li>
                            <li><small>{book.publisher}</small></li>
                            <li key={book.pageCount}><small>{book.pageCount} pages</small></li>
                        </div>
                        
                        <div id="description"> <li>{book.description}</li></div>
                        <button id="add-button" onClick={() => {this.handleAddBook(book)}}>Add {book.title} to Your Shelf</button>
                    </ul>
                )
        })
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addBook }, dispatch)
}

export default connect(null, mapDispatchToProps)(FoundBook)