import { fetchUserBookActions } from '../constants/constants_book'

const initialState = {
    loading: false, 
    error: null,
    userBooks: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case fetchUserBookActions.FETCH_USER_BOOKS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case fetchUserBookActions.FETCH_USER_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                userBooks: action.payload.books 
            }
        case fetchUserBookActions.FETCH_USER_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default: 
            return state
    }
}

