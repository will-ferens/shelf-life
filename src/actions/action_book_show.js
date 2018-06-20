export const BOOK_SELECTED = 'BOOK_SELECTED'

export function showBook(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}