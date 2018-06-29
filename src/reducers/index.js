import { combineReducers } from 'redux'

import YourBooks from './reducer_your_books'
import NewBook  from './reducer_book_search'
import User from './reducer_user'
import SelectedBook from './reducer_show_book'


const rootReducer = combineReducers({
    yourBooks: YourBooks,
    searchedBook: NewBook,
    selectedBook: SelectedBook,
    userInfo: User
})

export default rootReducer