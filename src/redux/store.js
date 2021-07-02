import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './books/book-reducer';
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = () => (
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))
);

const store = configureStore();

export default store;