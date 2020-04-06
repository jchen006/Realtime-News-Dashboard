import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

export const configureStore = (initialState={}) => {
    const middlewares = [thunk, logger];
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );
}