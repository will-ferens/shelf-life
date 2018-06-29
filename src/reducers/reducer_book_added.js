import YourBooks from './reducer_your_books'
import { BOOK_ADDED } from '../constants/constants_book'


const initialState = { YourBooks }

export default function(state = initialState, action) {
    switch(action.type){
        case BOOK_ADDED:
            return {...state, addedBook: action.payload}
        
        default:
            return state
    }
    
}