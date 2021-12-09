import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducers from './rootReducers';


const middleware = thunk;

const store = createStore(rootReducers, compose(applyMiddleware(middleware), composeWithDevTools()))

export default store;
