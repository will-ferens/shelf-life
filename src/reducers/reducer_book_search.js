import {
    FETCH_BOOKS_BEGIN,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from '../actions/action_book_search'

const initialState = {
    newBooks: [],
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS_BEGIN:
        return {
            ...state,
            loading: true,
            error: null
        }

        case FETCH_BOOKS_SUCCESS:
        console.log(action.payload.books)
        return {
            ...state,
            loading: false,
            newBooks: action.payload.books
        }

        case FETCH_BOOKS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            newBooks: []
        }

        default:
        return state

    }
}