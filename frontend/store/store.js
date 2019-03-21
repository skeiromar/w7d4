
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
    //on every dispatch we will hit the middleware that we apply
    // debugger
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk));
};
// const configureStore = () => createStore(rootReducer, applyMiddleware(logger));

export default configureStore;