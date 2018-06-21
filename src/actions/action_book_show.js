import { BOOK_SELECTED } from '../constants/constants_book'

export function showBook(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}