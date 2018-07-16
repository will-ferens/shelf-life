import React, { Component } from 'react'
import BookTable from '../components/book_table'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserBooks } from '../actions/action_get_user_books'

//<Link to="/book/:id">
class YourBooks extends Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchUserBooks()
    }

    render(){
        const { error, loading, books } = this.props.UserBooks
        if(error) {
            return <div>{error.message}</div>
        }
        if(loading) {
            return <div>loading... </div>
        }
        return ( 
            <div>
                <BookTable books={books.books} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        UserBooks: state.UserBooks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchUserBooks: fetchUserBooks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YourBooks)

