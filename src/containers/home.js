import React, { Component } from 'react'
import BookTable from '../components/book_table'
import SearchBar from './search_bar'
import SelectedBook from './selected_book'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import '../style/home.css'

class YourBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedBook: null
        }
        console.log(this.state.selectedBook)
    }

    render(){
        
        return ( 
            <div className="main">
                <div className="book-table">
                    <h2>Your Books</h2>
                </div>
                <div className="search">
                <SearchBar 
                    onBookSelect = {selectedBook => this.setState({selectedBook})}
                />
                </div>
                <div className="selected-book">
                    <SelectedBook selectedBook={this.state.selectedBook}/>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,

    }
}


export default connect(mapStateToProps, null)(YourBooks)

