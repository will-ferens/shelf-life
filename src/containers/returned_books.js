import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoundBook from '../components/found_book'
class ReturnedBooks extends Component {

    render() {
        console.log(this.props)
        const { error, loading, newBooks, intialized } = this.props.searchedBook
        if(intialized) {
            return <div></div>
        }
        if(error) {
            return <div>Oops! There was an error</div>
        }
        if(loading) {
            return <div>Loading...</div>
        }
        if(newBooks){
            return (
                <div>
                    <FoundBook bookData={newBooks} />
                </div>
            )
        }
    }
}

function mapStateToProps({ searchedBook }) {
    return { searchedBook }
}

export default connect(mapStateToProps)(ReturnedBooks)