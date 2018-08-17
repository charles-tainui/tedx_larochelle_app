import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './rootReducer'; //Import the root reducer

const enhancer = compose(applyMiddleware(ReduxThunk));

export default createStore(reducers, enhancer);