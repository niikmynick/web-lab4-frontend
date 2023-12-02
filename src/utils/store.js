import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Install this if not installed yet
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
