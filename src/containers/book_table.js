import React from 'react'
import BookItem from './book_item'
import { bookSelector, toReadSelector, ReadingSelector, ReadSelector } from '../selectors'
import { connect } from 'react-redux'
import { map } from 'bluebird';


const BookTable = (props) => {
    const toRead = props.toRead.map(book => {
        return (
            <BookItem 
                book={book} 
                key={book._id} 
                />
        )
    })
    
    const reading = props.reading.map(book => {
        return (
            <BookItem 
                book={book} 
                key={book._id} 
                />
        )
    })
    
    const read = props.read.map(book => {
        return (
            <BookItem 
                book={book} 
                key={book._id} 
                />
        )
    })

    if(!props){ 
        return <div></div> 
    }
    if(props.error) {
        return <div>Whoops! Something went wrong.</div>
    }
    if(props.loading) {
        return <div>Loading...</div>
    }
    if(props.books != null) {
        return (
            <div>
                <div>
                    <h3>To Read</h3>
                    {toRead}
                </div>
                <div>
                    <h3>Reading</h3>
                    {reading}
                </div>
                <div>
                    <h3>Read</h3>
                    {read}
                </div>
            </div>
        )

    }
    if(props){ 
        return <div></div> 
    }
}

const mapStateToProps = (state) => {
    return {
        books: bookSelector(state),
        toRead: toReadSelector(state),
        reading: ReadingSelector(state),
        read: ReadSelector(state)
    }
}

export default connect(mapStateToProps, null)(BookTable)

// <div key={1}>
//                     <h3>To Read</h3>
//                     <BookItem 
//                         book={book} 
//                         key={book._id} 
//                         />
//              </div>