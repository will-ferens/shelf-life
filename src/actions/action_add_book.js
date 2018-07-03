import { postBookActions } from '../constants/constants_book'

const ADD_URL = 'http://localhost:3001/addbook'

// export const postBookBegin = () => ({
//     type: postBookActions.POST_BOOK_BEGIN
// })

// export const postBookSuccess = () => ({
//     type: postBookActions.POST_BOOK_SUCCESS,
//     payload: { book }
// })

// export const postBookFailure = () => ({
//     type: postBookActions.POST_BOOK_FAILURE,
//     payload: { error }
// })

export function addBook(book){
    console.log(book)
    return {
        type: postBookActions.POST_BOOK,
        payload: book
    }
}