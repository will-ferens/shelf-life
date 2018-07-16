import { combineReducers } from 'redux'

import NewBook  from './reducer_book_search'
import User from './reducer_user'
import SelectedBook from './reducer_show_book'
import RegisteredUser from './reducer_register'
import UserBooks from './reducer_get_user_books'

const rootReducer = combineReducers({
    searchedBook: NewBook,
    selectedBook: SelectedBook,
    userInfo: User,
    RegisteredUser: RegisteredUser,
    UserBooks: UserBooks
})

export default rootReducer