import React, { Component } from 'react'
import BookTable from './book_table'
import SearchBar from './search_bar'
import SelectedBook from './selected_book'


import { fetchUserBooks } from '../../actions/books/fetch_user_books'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import '../../style/home.css'

class YourBooks extends Component {
    constructor(props) {
        super(props)

        
        this.props.fetchUserBooks()
    }

    render(){
        
        return ( 
            <div className="main">
                <div className="book-table">
                    <h2>Your Books</h2>
                    <BookTable />
                </div>
                <div className="search">
                <SearchBar />
                </div>
                <div className="selected-book">
                    <SelectedBook />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        userInfo: state.userInfo,
        userBooks: state.UserBooks,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchUserBooks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(YourBooks)

