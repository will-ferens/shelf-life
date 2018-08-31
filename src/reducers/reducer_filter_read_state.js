import { filterReadState } from '../actions/books/action_filter_user_books'
import { readStateActions } from '../constants/constants_book'

export default function (state = readStateActions.READ_STATE, action) {
    switch (action.type) {
        case readStateActions.READ_STATE:
            return action.readState
        default:
            return state
    }
}

