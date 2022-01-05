import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';


const middleware = thunk;
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(middleware)))

export default store;
