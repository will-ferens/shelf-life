import React, { Component } from 'react'
import { selectUserBook } from '../../actions/books/select_book'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BookItem extends Component {
    
    render(){
        const { book } = this.props

        return (
            <div onClick={() => this.props.selectUserBook(book)} className="list-item">
                <div>{book.title}</div>
                <div><small>{book.author}</small></div>
            </div>
        )
    }
    
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectUserBook }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookItem)