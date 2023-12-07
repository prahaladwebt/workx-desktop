import rootReducer from './reducer';
import { legacy_createStore as createStore, applyMiddleware, Store } from 'redux';

const store : Store= createStore(rootReducer);

export default store;