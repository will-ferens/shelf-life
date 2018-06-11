import { combineReducers } from 'redux'

import YourBooks from './reducer_your_books'

const rootReducer = combineReducers({
    yourBooks: YourBooks
})

export default rootReducer