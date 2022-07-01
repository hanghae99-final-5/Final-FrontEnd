import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from './modules/user';

const rootReducer = combineReducers({ user });
const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;