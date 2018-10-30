import React, { Component } from 'react'
import { selectNewBook } from '../../actions/books/select_book'
import { viewBook } from '../../actions/books/viewed_book'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResultItem extends Component {
    _onClick(book) {
        this.props.selectNewBook(book)
        this.props.viewBook(book)
    }
    render() {
        const book = this.props.books
        return (
            <li onClick= {() => this._onClick(book)} className="list-item">
                <div>
                    {book.volumeInfo.title}
                </div>
                <div>
                    <small><i>{book.volumeInfo.authors}</i></small>
                </div>
            </li>
        )
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectNewBook, viewBook }, dispatch)
}

export default connect(null, mapDispatchToProps)(ResultItem)