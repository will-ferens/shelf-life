import React, { Component } from 'react'
import '../../style/selectedBook.css'
import blank from '../../assets/blank.jpeg'

import { addBook } from '../../actions/books/add_book'
import { deleteBook } from '../../actions/books/action_remove_book'
import { updateBook } from '../../actions/books/action_update_readstate'
import { fetchUserBooks } from '../../actions/books/fetch_user_books'
import { bindActionCreators } from 'redux'
import { selectNewBook, selectUserBook } from '../../actions/books/select_book'
import { likeBook } from '../../actions/books/liked_book'
import { connect } from 'react-redux'


class SelectedBook extends Component {
    constructor(props) {
        super(props)

            this.onAddButtonPressed = this.onAddButtonPressed.bind(this)
            this.onDeleteButtonPressed = this.onDeleteButtonPressed.bind(this)

            this.onToReadButtonPressed = this.onToReadButtonPressed.bind(this)
            this.onReadingButtonPressed = this.onReadingButtonPressed.bind(this)
            this.onReadButtonPressed = this.onReadButtonPressed.bind(this)

            this.onLikeButtonPressedNew = this.onLikeButtonPressedNew.bind(this)
            this.onLikeButtonPressedUser = this.onLikeButtonPressedUser.bind(this)
    }
    
    onAddButtonPressed(event) {
        event.preventDefault()

        const book = this.props.NewSelectedBook
        const coverImage = book.volumeInfo.imageLinks  ? book.volumeInfo.imageLinks.thumbnail : blank
        const isbn = book.volumeInfo.industryIdentifiers.filter(current => {
            return current.identifier.length === 13
        }).map(current => {
            return current.identifier
        }).join("")
        

        const selectedBook = {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors[0],
                publisher: book.volumeInfo.publisher,
                cover: coverImage,
                ISBN: isbn,
                pageCount: book.volumeInfo.pageCount,
                description: book.volumeInfo.description
            }
        
        this.props.addBook(selectedBook)
        this.props.selectNewBook(null)
        setTimeout(
            function() {
                this.props.fetchUserBooks()
            }
            .bind(this),
            1000
        )

    }

    onDeleteButtonPressed(event) {
        event.preventDefault()

        const bookId = this.props.UserSelecetedBook._id

        this.props.deleteBook(bookId)
        setTimeout(
            function() {
                this.props.fetchUserBooks()
            }
            .bind(this),
            1000
        )
        this.props.selectUserBook(null)
    }

    onToReadButtonPressed(event) {
        event.preventDefault()
        
        const bookId = this.props.UserSelecetedBook._id
        
        let readState = 'ToRead'
        this.props.updateBook(bookId, readState)
        setTimeout(
            function() {
                this.props.fetchUserBooks()
            }
            .bind(this),
            1000
        )
    }

    onReadingButtonPressed(event) {
        event.preventDefault()

        const bookId = this.props.UserSelecetedBook._id
        
        let readState = 'Reading'
        this.props.updateBook(bookId, readState)
        setTimeout(
            function() {
                this.props.fetchUserBooks()
            }
            .bind(this),
            1000
        )
    }

    onReadButtonPressed(event) {
        event.preventDefault()

        const bookId = this.props.UserSelecetedBook._id

        let readState = 'Read'
        this.props.updateBook(bookId, readState)
        setTimeout(
            function() {
                this.props.fetchUserBooks()
            }
            .bind(this),
            1000
        )
        
    }

    onLikeButtonPressedNew(event) {
        event.preventDefault()
        const newBook = this.props.NewSelectedBook
        
        this.props.likeBook(newBook)

        console.log('ass')

    }

    onLikeButtonPressedUser(event) {
        event.preventDefault()
        const userBook = this.props.UserSelecetedBook
        
        this.props.likeBook(userBook)

        console.log('ass')

    }

    render (){
        const newBook = this.props.NewSelectedBook
        const userBook = this.props.UserSelecetedBook
        
        
        if(newBook != null){

            const coverImage = newBook.volumeInfo.imageLinks  ? (
                <img src={newBook.volumeInfo.imageLinks.thumbnail} alt={newBook.volumeInfo.title}/>
            ) : (
                <img src={blank} alt={newBook.volumeInfo.title}/>
            )
            
            return (
                <div className="selected-book">
                    <h2>Selected Book</h2>
                    <div className="book-header">
                        <div>
                            {coverImage}
                        </div>
                        <div>
                            <h3>{newBook.volumeInfo.title}</h3>
                            <h4>{newBook.volumeInfo.subtitle}</h4>
                            <p>{newBook.volumeInfo.authors}</p>
                            <small>Pages: {newBook.volumeInfo.pageCount}</small>
                            <br/>
                            <small><i>{newBook.volumeInfo.publisher}</i></small>
                        </div>
                    </div>
                    <div className="book-body">
                        <span><i>Description:</i> {newBook.volumeInfo.description}</span>
                        <button className="add-button" onClick={this.onAddButtonPressed}>Add Book to Shelf</button>
                        <button className="like-button" onClick={this.onLikeButtonPressedNew}> Like </button>
                    </div>
                </div>
            )
        } 
        
        else if(userBook != null) {
            
            const toReadButton = <button className="update-button" onClick={this.onToReadButtonPressed}>Mark as To Read</button>
            const readingButton = <button className="update-button" onClick={this.onReadingButtonPressed}>Mark as Reading</button>
            const readButton = <button className="update-button" onClick={this.onReadButtonPressed}>Mark as Read</button>

            const update = userBook.readState === "ToRead" ? readingButton : userBook.readState === "Reading" ? readButton : toReadButton

            return(
                <div className="selected-book">
                    <h2>Selected Book</h2>
                    <div className="book-header">
                        <div>
                            <img src={userBook.cover} alt={userBook.title} />
                        </div>
                        <div>
                            <h3>{userBook.title}</h3>
                            <p>{userBook.author}</p>
                            <small>Pages: {userBook.pageCount}</small>
                            <br/>
                            <small><i>{userBook.publisher}</i></small>
                        </div>
                    </div>
                    <div className="user-book-body">
                        <span><i>Description:</i> {userBook.description}</span>
                        {update}
                        <button className="like-button" onClick={this.onLikeButtonPressedUser}>Like</button>
                        <button className="remove-button" onClick={this.onDeleteButtonPressed}>Remove from Shelf</button>
                    </div>
                </div>
            )
        }
        
        else {
            return (
                <div>
                    <h2>Select a book</h2>
                </div>
            )
        }
            

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { 
            addBook, 
            deleteBook, 
            updateBook, 
            fetchUserBooks, 
            selectNewBook,
            selectUserBook,
            likeBook 
        }, dispatch)
}

function mapStateToProps(state){
    return {
        NewSelectedBook: state.NewSelectedBook,
        UserSelecetedBook: state.UserSelecetedBook,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBook)