import React, { Component } from 'react'
import SearchBar from './containers/search_bar'
import ReturnedBooks from './containers/returned_books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ReturnedBooks />
      </div>
    )
  }
}

export default App;
