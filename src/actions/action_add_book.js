import { BOOK_ADDED } from '../constants/constants_book'

export function addBook(book){
    return {
        type: BOOK_ADDED,
        payload: book
    }
}