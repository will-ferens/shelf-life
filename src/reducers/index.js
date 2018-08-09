import { combineReducers } from 'redux'

import NewBook  from './reducer_book_search'
import User from './reducer_user'
import RegisteredUser from './reducer_register'


const rootReducer = combineReducers({
    searchedBook: NewBook,
    userInfo: User,
    RegisteredUser: RegisteredUser,
})

export default rootReducer