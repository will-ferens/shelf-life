import React, { Component } from 'react'
import BookTable from '../components/book_table'
import SearchBar from './search_bar'
import SelectedBook from './selected_book'
import SelectedUserBook from './selected_user_book'
import { fetchUserBooks } from '../actions/fetch_user_books'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import '../style/home.css'

class YourBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedBook: null,
            selectedUserBook: null
        }
        this.props.fetchUserBooks()
        
    }

    render(){
        
        return ( 
            <div className="main">
                <div className="book-table">
                    <h2>Your Books</h2>
                    <BookTable 
                        books={this.props.userBooks} 
                        onUserBookSelect = {selectedUserBook => this.setState({selectedUserBook, selectedBook: null})} />
                </div>
                <div className="search">
                <SearchBar 
                    onBookSelect = {selectedBook => this.setState({selectedBook, selectedUserBook: null})}
                />
                </div>
                <div className="selected-book">
                    <SelectedBook selectedBook={this.state.selectedBook}/>
                    <SelectedUserBook selectedUserBook={this.state.selectedUserBook} />>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        userBooks: state.UserBooks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchUserBooks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(YourBooks)

