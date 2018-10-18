import { createStore, applyMiddleware, combineReducers } from 'redux';
import pmReducer from '../reducers/pmReducer.js'
import thunk from 'redux-thunk'
const reducers = combineReducers({
    pmReducer
})
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;