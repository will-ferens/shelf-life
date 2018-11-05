import React, { Component } from 'react'
import { selectUserBook } from '../../actions/books/select_book'
import { HEART } from '../../constants/constants_icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../style/bookItem.css'

const fill = '#000'
class BookItem extends Component {
    
    render(){
        const { book } = this.props

        return (
            <div onClick={() => this.props.selectUserBook(book)} className="book-item">
            <div>
                <div className="book-title-item">
                    {book.title}
                </div>
                <div className="book-author-item">
                    <small>
                        <i>{book.author}</i>
                    </small>
                </div>
            </div>
                <div className="book-item-like">
                    <button className="book-like-button">
                    <div className="svg-wrap">
                        <svg width="100%" height="100%" viewBox="0 0 64 64" className="like-svg" preserveAspectRatio="xMidYMin">
                            <path d={HEART.HEART} fill={fill}></path> 
                            <path d={HEART.HEART_2} fill={fill}></path>
                        </svg>  
                    </div>
                    </button>
                </div>
            </div>
        )
    }
    
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectUserBook }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookItem)