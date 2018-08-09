import React, { Component } from 'react'
import '../style/selectedBook.css'

class SelectedBook extends Component {

    render (){
        const book = this.props.selectedBook
        if(book != null){
            console.log(book)
            return (
                <div className="selected-book">
                    <h2>Selected Book</h2>
                    <div className="book-header">
                        
                        <div>
                            <img src={book.volumeInfo.imageLinks.thumbnail}/>
                        </div>
                        <div>
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>{book.volumeInfo.subtitle}</h4>
                            <p>{book.volumeInfo.authors}</p>
                            <small>Pages: {book.volumeInfo.pageCount}</small>
                            <br/>
                            <small><i>{book.volumeInfo.publisher}</i></small>
                        </div>
                    </div>
                    <div className="book-body">
                        <span><i>Description:</i> {book.volumeInfo.description}</span>
                        <button className="add-button">Add Book</button>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
            

    }
}

export default SelectedBook