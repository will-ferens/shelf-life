import YourBooks from './reducer_your_books'
import { postBookActions } from '../constants/constants_book'


const initialState = { YourBooks }

export default function(state = initialState, action) {
    switch(action.type){
        case postBookActions.POST_BOOK:
            return {...state, addedBook: action.payload.book}
        
        default:
            return state
    }
    
}