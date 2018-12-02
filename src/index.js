import React from 'react';
import ReactDOM from 'react-dom';
import TodoReactRedux from './todoReactRedux';
import { Provider } from 'react-redux';
import store from './reactRedux';

// 断网后serviceWorker可以把之前的页面缓存展示出来
// import * as serviceWorker from './serviceWorker';

const App = (
	// Provider中的所有组件都有能力获取到store
	<Provider store={store}>
		<TodoReactRedux />
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'));
// serviceWorker.unregister();
