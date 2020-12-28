import { combineReducers } from 'redux';
import { commentsReducer } from '../comments/reducer'
import { formReducer } from '../form/reducer'

export const rootReducer = combineReducers({
    comments: commentsReducer,
    form: formReducer
})