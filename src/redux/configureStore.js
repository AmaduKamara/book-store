import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import bookReducer from './books/books';

const reducer = combineReducers({
  bookReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
