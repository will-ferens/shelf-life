import { viewBookActions } from '../../constants/constants_book'

const initialState = { 
    error: null,
    success: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case viewBookActions.VIEW_BOOK_BEGIN:
            return state
            
        case viewBookActions.VIEW_BOOK_SUCCESS:
            return {
                ...state,
                success: action.payload.book
            }
            case viewBookActions.VIEW_BOOK_FAILURE:
            return {
                ...state,
                success: false,
                error: action.payload.error
            }
            default: 
                return state
    }
}