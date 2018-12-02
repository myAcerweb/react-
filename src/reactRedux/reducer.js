const defaultSate = {
	inputValue: '',
	list: []
}

export default (state = defaultSate, action) => {
	if (action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.inputValue;
		return newState;
	} else if (action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}
	return state;
}