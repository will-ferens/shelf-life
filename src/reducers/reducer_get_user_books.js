import { fetchUserBookActions } from '../constants/constants_book'

const initialState = {
    books: [],
    message: '',
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case fetchUserBookActions.FETCH_BOOKS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case fetchUserBookActions.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                books: action.payload.books
            }
        case fetchUserBookActions.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}