import { combineReducers } from 'redux';
import { reducer as authReducer } from '../modules/auth/index';
import { reducer as homeReducer } from '../modules/home/index';

const rootReducer = combineReducers ({
	authReducer,
	homeReducer
});

export default rootReducer;