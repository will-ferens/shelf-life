import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/action_add_book'
import SearchBar from './search_bar'

class BookShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookToAdd: {}
        }

        this.handleAddBook = this.handleAddBook.bind(this)
    }
    componentDidMount(){
        if(!this.props.book){
            return
        }
        const book = this.props.book
        this.setState({
            bookToAdd: {
                title: book.title,
                author: book.author
            }
        })
        
    }
    handleAddBook(){
        console.log(this.state.bookToAdd)
    }

    render() {
        if(!this.props.book){
            return <SearchBar />
        }
        const book = this.props.book

        return (
            <div className="add-new-book">
            <ul className="searched-book">
                <h1>{book.title}</h1>
                {/*<li><img src={book.imageLinks.smallThumbnail} alt={book.title} /></li>*/}
                <li >Title: {book.title}</li>
                <li >Author: {book.author}</li>
                <li >Pages: {book.pageCount}</li>
                {/*<li>Description: <br/><span>{book.description}</span></li>*/}
                <button onClick={this.handleAddBook}>Add Book</button>
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.selectedBook
    }
}

export default connect(mapStateToProps)(BookShow)