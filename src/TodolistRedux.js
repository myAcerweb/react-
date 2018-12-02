import React,{ Component } from 'react';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodolistItemRedux from './TodolistItemRedux'
// 智能组件，只有逻辑
class TodolistRedux extends Component {
	constructor (props) {
		super(props)
		// 获取store中的数据
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		// 订阅	store中的值发生变化，就会调用this.handleStoreChange
		store.subscribe(this.handleStoreChange);
	}
	render (){
		return (
			<TodolistItemRedux 
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				list={this.state.list}
				handleDeleteItem={this.handleDeleteItem}
			/>
		)
	}

	handleInputChange (e) {
		const action =getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange () {
		this.setState(store.getState());
	}

	handleBtnClick () {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleDeleteItem (index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}


export default TodolistRedux;
