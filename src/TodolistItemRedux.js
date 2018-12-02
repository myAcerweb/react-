import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
// 无状态组件，没有生命周期函数，只负责页面渲染的时候使用
const TodolistItemRedux = (props) => {
	return (
		<div>
			<Input placeholder="输入"
				onChange={props.handleInputChange} 
				value={props.inputValue}
				style={{width:'300px',marginLeft:'20px',marginRight:'10px'}}/>
			<Button onClick={props.handleBtnClick} type="primary">添加</Button>
			<List
			  style={{width:'300px',marginLeft:'20px'}}	
	      bordered
	      dataSource={props.list}
	      renderItem={(item, index) => (<List.Item onClick={
	      	() => {
	      		props.handleDeleteItem(index)
	      	}
	      }>{item}</List.Item>)}
	    />
		</div>
	)
}
// ui组件，只负责页面渲染
// class TodolistItemRedux extends Component {
// 	render () {
// 		return (
// 			<div>
// 				<Input placeholder="输入"
// 					onChange={this.props.handleInputChange} 
// 					value={this.props.inputValue}
// 					style={{width:'300px',marginLeft:'20px',marginRight:'10px'}}/>
// 				<Button onClick={this.props.handleBtnClick} type="primary">Primary</Button>
// 				<List
// 				  style={{width:'300px',marginLeft:'20px'}}	
// 		      bordered
// 		      dataSource={this.props.list}
// 		      renderItem={(item, index) => (<List.Item onClick={
// 		      	() => {
// 		      		this.props.handleDeleteItem(index)
// 		      	}
// 		      }>{item}</List.Item>)}
// 		    />
// 			</div>
// 		)
// 	}
// }

export default TodolistItemRedux;