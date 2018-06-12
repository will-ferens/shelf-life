import React, { Component } from 'react'
import { connect } from 'react-redux'


export default class FoundBook extends Component {
    render(){
        return (
            this.props.bookData.map(current => {
            const book = current.items[0].volumeInfo
            return( 
                    <ul key={current.id} className="searched-book">
                        <li key={book.imageLinks.smallThumbnail}><img src={book.imageLinks.smallThumbnail} /></li>
                        <li key={book.title}>Title: {book.title}</li>
                        <li key={book.authors[0]}>Author: {book.authors[0]}</li>
                        <li key={book.pageCount}>Pages: {book.pageCount}</li>
                    </ul>
                )
        })
        )
    }
}