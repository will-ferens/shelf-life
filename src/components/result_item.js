import React from 'react'

const ResultItem = (props) => {
    const book = props.books
    return (
        <li onClick= {() => props.onBookSelect(book)} className="list-item">
            <div>
                {book.volumeInfo.title}
            </div>
            <div>
                <small><i>{book.volumeInfo.authors}</i></small>
            </div>
        </li>
    )
}

export default ResultItem