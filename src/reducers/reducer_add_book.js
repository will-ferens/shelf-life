import { postBookActions } from '../constants/constants_book'

const initialState = {
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case postBookActions.POST_BOOK_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case postBookActions.POST_BOOK_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case postBookActions.POST_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}