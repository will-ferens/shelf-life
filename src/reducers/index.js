import { combineReducers } from 'redux'

import YourBooks from './reducer_your_books'
import NewBook  from './reducer_book_search'
import User from './reducer_user'

const rootReducer = combineReducers({
    yourBooks: YourBooks,
    searchedBook: NewBook,
    userInfo: User
})

export default rootReducer