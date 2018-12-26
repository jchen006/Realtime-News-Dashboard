import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import logger from 'redux-logger'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState={}) {
    const middlewares = [thunk, logger]
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middlewares)),
    );
}