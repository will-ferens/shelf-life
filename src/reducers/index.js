import { combineReducers } from 'redux'

import NewBook  from './reducer_book_search'
import User from './reducer_user'
import RegisteredUser from './reducer_register'
import AddBook from './reducer_add_book'
import UserBooks from './reducer_user_books_fetch'

const rootReducer = combineReducers({
    searchedBook: NewBook,
    userInfo: User,
    RegisteredUser: RegisteredUser,
    AddBook: AddBook,
    UserBooks: UserBooks
})

export default rootReducer