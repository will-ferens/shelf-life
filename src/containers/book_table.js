import React from 'react'
import BookItem from './book_item'

import { connect } from 'react-redux'
import { filterReadState } from '../actions/books/action_filter_user_books'
import { readStateActions } from '../constants/constants_book'


const getReadState = (books, filter) => {
    console.log(filter)
    switch(filter) {
        case readStateActions.READ_STATE_TOREAD:
            return books.filter(book => book.readState === "ToRead")
        case readStateActions.READ_STATE_READING:
            return books.filter(book => book.readState === "Reading")
        case readStateActions.READ_STATE_READ:
            return books.filter(book => book.readState === "Read")
    }
}

const BookTable = ({books, filterReadState}) => {

    if(!books){ 
        return <div></div> 
    }
    if(books.error) {
        return <div>Whoops! Something went wrong.</div>
    }
    if(books.loading) {
        return <div>Loading...</div>
    }
    if(books.userBooks != null) {
        return books.userBooks.map((book, index) => {
            return (
                <BookItem 
                    book={book} 
                    key={book._id} 
                    />
            )
        })

    }
    if(books){ 
        return <div></div> 
    }
}



export default BookTable

// <div key={1}>
//                     <h3>To Read</h3>
//                     <BookItem 
//                         book={book} 
//                         key={book._id} 
//                         />
//              </div>