// applyMiddleware允许redux使用中间件
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

export default store;