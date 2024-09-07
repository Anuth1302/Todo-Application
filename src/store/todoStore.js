import { createStore , combineReducers } from 'redux';
import { todo } from '../reducers/reducer';
const reducers = {
todo,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () =>createStore(rootReducer)