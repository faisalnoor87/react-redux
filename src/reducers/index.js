import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
    books: BooksReducer,
    bookDetail: ActiveBookReducer
})

export default rootReducer