import React from 'react'


const BookTable = props => {
    const { books } = props

    if(!books) return null

    if(!books.length) return (<p>Add some books to get started!</p>)

    return books.map((book, index) => {
        return (
            <li key={index} className="user-books" >
                <h6>{book.title}</h6>
            </li>
        )
    })
    
}

export default BookTable