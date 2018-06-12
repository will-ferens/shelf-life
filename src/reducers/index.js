import { combineReducers } from 'redux'

import YourBooks from './reducer_your_books'
import NewBook  from './reducer_book_search'

const rootReducer = combineReducers({
    yourBooks: YourBooks,
    searchedBook: NewBook
})

export default rootReducer