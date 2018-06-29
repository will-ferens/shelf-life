import { fetchBookActions } from '../constants/constants_book'

const initialState = {
    newBooks: [],
    initialized: true,
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case fetchBookActions.FETCH_BOOKS_BEGIN:
        return {
            ...state,
            initialized: false,
            loading: true,
            error: null
        }

        case fetchBookActions.FETCH_BOOKS_SUCCESS:
        return {
            ...state,
            loading: false,
            newBooks: [ action.payload.books ]
        }

        case fetchBookActions.FETCH_BOOKS_FAILURE:
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