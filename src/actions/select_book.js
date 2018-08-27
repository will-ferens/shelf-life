import { selectBookActions } from '../constants/constants_book'

export function selectNewBook(book) {
    console.log(book)
    return {
        type: selectBookActions.SELECT_NEW_BOOK,
        payload: book
    }
}

export function selectUserBook(book) {
    return {
        type: selectBookActions.SELECT_USER_BOOK,
        payload: book
    }
}