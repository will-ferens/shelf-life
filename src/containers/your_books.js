import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//<Link to="/book/:id">
class YourBooks extends Component {

    renderList() {
        return this.props.yourBooks.map((book) => {
            return (
                <tr key={book.title} >
                    <td>{book.title}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <section className="existing-books">
            <Link to="/search"><button>Find a Book</button></Link>
            <table>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        yourBooks: state.yourBooks
    }
}

export default connect(mapStateToProps)(YourBooks)