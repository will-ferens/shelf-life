import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReturnedBooks extends Component {
    renderBooks(volumeInfo){
        const title = volumeInfo.title
        const author = volumeInfo.authors
        const description = volumeInfo.description
        const cover = volumeInfo.imageLinks.smallThumbnail
        const pages = volumeInfo.pageCount

        return (
            <ul>
                <li><img src={cover}/></li>
                <li>{title}</li>
                <li>{author}</li>
                <li>{description}</li>
                <li>{pages}</li>
            </ul>
        )

    }
    render() {
        const { error, loading, books } = this.props
        if(!this.props.newBooks) {
            return <div></div>
        }
        if(error) {
            return <div>Oops! {error.message}</div>
        }
        if(loading){
            return <div>Loading...</div>
        }
        return (
            <div>
                {books.newBooks.map(this.renderBooks)}
            </div>
        )
    }
}

function mapStateToProps({books}) {
    return { books }
}

export default connect(mapStateToProps)(ReturnedBooks)