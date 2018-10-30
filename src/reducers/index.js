import { combineReducers } from 'redux'

import NewBook  from './books/reducer_book_search'
import User from './users/reducer_user'
import RegisteredUser from './users/reducer_register'
import AddBook from './books/reducer_add_book'
import UserBooks from './books/reducer_user_books_fetch'
import PatchBook from './books/reducer_patch_book'
import DeleteBook from './books/reducer_delete_book'
import NewSelectedBook from './books/reducer_select_new_book'
import UserSelecetedBook from './books/reducer_select_user_book'



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