import React, { Component } from 'react'

import SearchBar from './containers/search_bar'
import ReturnedBooks from './containers/returned_books'
import YourBooks from './containers/your_books'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section className="existing-books">
            <YourBooks />
          </section>
          <section className="add-new-book">
            <SearchBar />
            <ReturnedBooks />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
