import React, { Component } from 'react'
import { connect } from 'react-redux'


export default class FoundBook extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleAddBook = this.handleAddBook.bind(this)
    }

    handleAddBook() {

    }
    render(){
        
        return (
            this.props.bookData.map(current => {
            const book = current.items[0].volumeInfo
                console.log(current)
            return( 
                    <ul key={current.id} className="searched-book">
                        <li id="cover" key={book.imageLinks.smallThumbnail}><img src={book.imageLinks.smallThumbnail} alt={book.title} /></li>
                        <div className="book-details">
                            <li key={book.title}><h3>{book.title}</h3></li>
                            <li key={book.authors[0]}><h5>{book.authors[0]}</h5></li>
                            <li><small>{book.categories[0]}</small></li>
                            <li><small>{book.publisher}</small></li>
                            <li key={book.pageCount}><small>{book.pageCount} pages</small></li>
                        </div>
                        
                        <div id="description"> <li>{book.description}</li></div>
                        <button id="add-button" onClick={this.handleAddBook}>Add {book.title} to Your Shelf</button>
                    </ul>
                )
        })
        )
    }
}