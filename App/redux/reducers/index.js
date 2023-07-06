import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { loadingReducer } from './loadingReducer';

const reducers = combineReducers({ authenticationReducer, loadingReducer });

export default reducers;
