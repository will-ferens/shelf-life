import React, { Component } from 'react'

import SearchBar from './containers/search_bar'
import ReturnedBooks from './containers/returned_books'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ReturnedBooks />
        <Footer />
      </div>
    )
  }
}

export default App;
