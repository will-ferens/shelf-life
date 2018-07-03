import { BOOK_SELECTED } from '../constants/constants_book'

export default function(state = null, action) {
    switch(action.type){
        case BOOK_SELECTED:
        return action.payload
        
        default:
        return state
    }

}