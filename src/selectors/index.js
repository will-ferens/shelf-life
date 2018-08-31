import { createSelector } from 'reselect'

export const bookSelector = state => state.UserBooks.userBooks

export const toReadSelector = createSelector(
    bookSelector,
    books => books.filter(book => book.readState === "ToRead")
)

export const ReadingSelector = createSelector(
    bookSelector,
    books => books.filter(book => book.readState === "Reading")
)

export const ReadSelector = createSelector(
    bookSelector,
    books => books.filter(book => book.readState === "Read")
)



