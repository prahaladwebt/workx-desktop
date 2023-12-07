import { combineReducers } from 'redux';
import { ApplicationState } from './types';

const rootReducer = combineReducers<ApplicationState>({
    testReducer: {}
});

export default rootReducer;