import React, { Component } from 'react'
import BookShow  from './book_show'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showBook } from '../actions/action_book_show'
import { bindActionCreators } from 'redux'

//<Link to="/book/:id">
class YourBooks extends Component {
    
    renderList() {
        return this.props.yourBooks.map((book) => {
            return (
                <tr key={book.title} >
                    <td onClick={() => this.props.showBook(book)}>{book.title}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="book-wrapper">
                <section className="existing-books">
                <Link to="/search"><button>Find a Book</button></Link>
                <table>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                </section>
                <BookShow />
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