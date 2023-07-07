import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { splashReducer } from './splashReducer';

const reducers = combineReducers({ authenticationReducer, splashReducer });

export default reducers;
