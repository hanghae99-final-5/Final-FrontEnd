import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

//modules
import todo from "./moduels/todo";
import characters from "./moduels/characters";

const middlewares = [thunk];
// const enhancer = applyMiddleware(...middlewares);
const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  )
const rootReducer = combineReducers({
    todo,
    characters,
})

const store = createStore(rootReducer,composedEnhancer);

export default store;

