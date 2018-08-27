import { selectBookActions } from '../constants/constants_book'

export default function(state = null, action) {
    switch(action.type) {
        case selectBookActions.SELECT_USER_BOOK:
            return action.payload
        default:
            return state
    }
}