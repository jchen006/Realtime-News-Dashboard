import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import googleReducer from './googleReducer'

export default combineReducers({
    simpleReducer,
    googleReducer
});