import { updateBookActions } from '../../constants/constants_book'

const initialState = {
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case updateBookActions.PATCH_USER_BOOK_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case updateBookActions.PATCH_USER_BOOK_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case updateBookActions.PATCH_USER_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}