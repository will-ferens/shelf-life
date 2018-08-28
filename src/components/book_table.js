import React from 'react'
import BookItem from '../containers/book_item'


const BookTable = (props) => {
    const { books } = props

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
                <div key={1}>
                    <h3>To Read</h3>
                    <BookItem 
                        book={book} 
                        key={book._id} 
                        />
                </div>
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