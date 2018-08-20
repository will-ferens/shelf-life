import React, { Component } from 'react'
import '../style/selectedBook.css'
import blank from '../assets/blank.jpeg'
import { addBook } from '../actions/add_book'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SelectedBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedBook: { }
        }

            this.onAddButtonPressed = this.onAddButtonPressed.bind(this)
    }
    
    onAddButtonPressed(event) {
        event.preventDefault()

        const book = this.props.selectedBook
        const coverImage = book.volumeInfo.imageLinks  ? book.volumeInfo.imageLinks.thumbnail : blank
        const isbn = book.volumeInfo.industryIdentifiers.filter(current => {
            return current.identifier.length == 13
        }).map(current => {
            return current.identifier
        }).join("")
        
        this.setState({ 
            selectedBook: {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors[0],
                publisher: book.volumeInfo.publisher,
                cover: coverImage,
                ISBN: isbn,
                pageCount: book.volumeInfo.pageCount,
            }
        })
        this.props.addBook(this.state.selectedBook)
    }

    render (){
        const book = this.props.selectedBook
        
        if(book != null){

            const coverImage = book.volumeInfo.imageLinks  ? (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
            ) : (
                <img src={blank} alt={book.volumeInfo.title}/>
            )
            
            return (
                <div className="selected-book">
                    <h2>Selected Book</h2>
                    <div className="book-header">
                        
                        <div>
                            {coverImage}
                        </div>
                        <div>
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>{book.volumeInfo.subtitle}</h4>
                            <p>{book.volumeInfo.authors}</p>
                            <small>Pages: {book.volumeInfo.pageCount}</small>
                            <br/>
                            <small><i>{book.volumeInfo.publisher}</i></small>
                        </div>
                    </div>
                    <div className="book-body">
                        <span><i>Description:</i> {book.volumeInfo.description}</span>
                        <button className="add-button" onClick={this.onAddButtonPressed}>Add Book</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
            

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addBook }, dispatch)
}

export default connect(null, mapDispatchToProps) (SelectedBook)