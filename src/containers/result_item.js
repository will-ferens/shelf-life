import React, { Component } from 'react'
import { selectNewBook } from '../actions/select_book'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResultItem extends Component {

    render() {
        const book = this.props.books
        return (
            <li onClick= {() => this.props.selectNewBook(book)} className="list-item">
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
    return bindActionCreators({ selectNewBook }, dispatch)
}

export default connect(null, mapDispatchToProps)(ResultItem)