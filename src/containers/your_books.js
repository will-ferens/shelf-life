import React, { Component } from 'react'
import { connect } from 'react-redux'

class YourBooks extends Component {
    renderList() {
        return this.props.yourBooks.map((book) => {
            return (
                <tr key={book.title}>
                    <td>{book.title}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        yourBooks: state.yourBooks
    }
}

export default connect(mapStateToProps)(YourBooks)