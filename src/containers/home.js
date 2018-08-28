import React, { Component } from 'react'
import BookTable from '../components/book_table'
import SearchBar from './search_bar'
import SelectedBook from './selected_book'

import { fetchUserBooks } from '../actions/fetch_user_books'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import '../style/home.css'

class YourBooks extends Component {
    constructor(props) {
        super(props)

        
        this.props.fetchUserBooks()
        

    }
    componentWillUnmount() {
        window.onbeforeunload = function(event) {
            console.log('poop')
            return localStorage.removeItem('id_token')
        }
    }

    render(){
        
        return ( 
            <div className="main">
                <div className="book-table">
                    <h2>Your Books</h2>
                    <BookTable 
                        books={this.props.userBooks} />
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

