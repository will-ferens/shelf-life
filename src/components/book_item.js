import React from 'react'

const BookItem = (props) => {
    const { book } = props

    return (
        <div onClick={() => props.onUserBookSelect(book)} className="list-item">
            <div>{book.title}</div>
            <div><small>{book.author}</small></div>
        </div>
    )
}

export default BookItem