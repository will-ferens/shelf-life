import { likeBookActions } from '../../constants/constants_book'

const initialState = {
    error: null,
    success: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case likeBookActions.LIKE_BOOK_BEGIN:
            return state
        case likeBookActions.LIKE_BOOK_SUCCESS:
            return {
                ...state,
                success: true
            }
        case likeBookActions.LIKE_BOOK_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}