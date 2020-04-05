import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import logger from 'redux-logger'

const reduxDevtools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__() && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = reduxDevtools || compose;

export const configureStore = (initialState={}) => {
    const middlewares = [thunk, logger];
    return createStore(
        rootReducer,
        initialState,
        // composeEnhancers(applyMiddleware(...middlewares)),
    );
}



