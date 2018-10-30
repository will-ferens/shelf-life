import { combineReducers } from 'redux'

//USER 
import User from './users/reducer_user'
import RegisteredUser from './users/reducer_register'

//CRUD 
import AddBook from './books/reducer_add_book'
import UserBooks from './books/reducer_user_books_fetch'
import PatchBook from './books/reducer_patch_book'
import DeleteBook from './books/reducer_delete_book'

//SEARCH 
import NewBook  from './books/reducer_book_search'
import NewSelectedBook from './books/reducer_select_new_book'
import UserSelecetedBook from './books/reducer_select_user_book'

//RECOMMENDATION TRACKING
import ViewedBook from './books/reducer_view_book'
import LikedBook from './books/reducer_like_book'


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
    ViewedBook: ViewedBook,
    LikedBook: LikedBook
})

export default rootReducer