import React, { Component, Fragment } from 'react';
// Fragment直接让root标签为外层标签
import TodoItem from './TodoItem'
class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			inputVal: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	render () {
		return (
			<Fragment>
				<div>
					<input 
						value={this.state.inputVal} 
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}

	getTodoItem () {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					key={index}
					content={item}
					index={index}
					clickDelete={this.handleDelete}
				/>
			)
		})
	}

	handleInputChange (e) {
		const value =  e.target.value
		this.setState(() => ({ inputVal: value }))
	}

	handleBtnClick () {
		this.setState((prevState) => ({
			list: [...prevState.list,prevState.inputVal],
			inputVal: ''
		}))
	}

	handleDelete (index) {
		this.setState((prevState) => {
			const list = [...this.state.list];
			list.splice(index,1);
			return {list};
		})
	}
}

export default TodoList;