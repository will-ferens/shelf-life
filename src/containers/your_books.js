import React, { Component } from 'react'
import BookShow  from './book_show'
import SearchBar from './search_bar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showBook } from '../actions/action_book_show'
import { bindActionCreators } from 'redux'

//<Link to="/book/:id">
class YourBooks extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookSelected: false
        }
    

    }
    handleSelectBook(book){
        this.props.showBook(book)

        this.setState({
            bookSelected: true
        })
    }

    findBookClick(){
        this.setState({
            bookSelected: false
        })
    }
    renderList() {
        return this.props.yourBooks.map((book) => {
            return (
                <tr key={book.title} >
                    <td onClick={() => this.handleSelectBook(book)}>{book.title}</td>
                </tr>
            )
        })
    }

    render() {
        const bookSelected = this.state.bookSelected
        return (
            <div className="book-wrapper">
                <section className="existing-books">
                <button onClick={() => this.findBookClick()}>Find a Book</button>
                <table>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                </section>
                {bookSelected ? <BookShow /> : <SearchBar />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        yourBooks: state.yourBooks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({showBook: showBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YourBooks)