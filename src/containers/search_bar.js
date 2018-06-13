import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBook } from '../actions/action_book_search'

class SearchBar extends Component {
    constructor(props){
        super(props)
        
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    
    onInputChange(event){
        this.setState({ term: event.target.value })
    }
    
    onFormSubmit(event){
        event.preventDefault()

        this.props.fetchBook(this.state.term)
        this.setState({ term: '' })
    }
    render(){
        return (
            <form 
                className="find-book"
                onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Search for a new book"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchBook }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)