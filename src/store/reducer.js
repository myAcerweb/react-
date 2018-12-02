import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
	inputValue: '',
	list: ['hello', 'react', 'bc']
};
export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		// 深度拷贝对象
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	} else if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	} else if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}