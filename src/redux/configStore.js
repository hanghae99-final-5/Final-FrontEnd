import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

//modules
import todo from "./modules/todo";
import characters from "./modules/characters";
import user from './modules/user';

const middlewares = [thunk];
// const enhancer = applyMiddleware(...middlewares);
const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  )
const rootReducer = combineReducers({
    todo,
    characters,
    user
})

const store = createStore(rootReducer,composedEnhancer);

export default store;

