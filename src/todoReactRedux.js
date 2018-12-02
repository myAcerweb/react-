import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoReactRedux extends Component {
	render () {
		return (
			<div>
				<div>
					<input 
						value={this.props.inputValue}
						onChange={this.props.changeInputValue}
					/><button onClick={this.props.handleClick}>提交</button>
				</div>
				<ul>
					{
						this.props.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		)
	}
	handleInputChange (e) {

	}
}
// 获取store中的值,将state映射到props上
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
// 修改store中的值，将store.dispatch映射到props上
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue (e) {
			const action = {
				inputValue: e.target.value,
				type: 'change_input_value'
			};
			dispatch(action);
		},
		handleClick () {
			const action = {
				type: 'add_todo_item'
			};
			dispatch(action);
		}
	}
}
// TodoReactRedux是ui组件，mapStateToProps是数据，mapDispatchToProps是逻辑
// 整个返回就是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoReactRedux);