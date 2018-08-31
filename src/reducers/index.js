import { combineReducers } from 'redux'

import NewBook  from './reducer_book_search'
import User from './reducer_user'
import RegisteredUser from './reducer_register'
import AddBook from './reducer_add_book'
import UserBooks from './reducer_user_books_fetch'
import PatchBook from './reducer_patch_book'
import DeleteBook from './reducer_delete_book'
import NewSelectedBook from './reducer_select_new_book'
import UserSelecetedBook from './reducer_select_user_book'



const rootReducer = combineReducers({
    searchedBook: NewBook,
    userInfo: User,
    RegisteredUser: RegisteredUser,
    AddBook: AddBook,
    UserBooks: UserBooks,
    PatchBook: PatchBook,
    DeleteBook: DeleteBook,
    NewSelectedBook: NewSelectedBook,
    UserSelecetedBook: UserSelecetedBook,
})

export default rootReducer