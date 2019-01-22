import {
	SET_FILTER
} from '../constants/constants';

const defaultState = {
	filterValue: ""
};

const filterReducer = (state = defaultState, action ) => {
	let newState;

	switch(action.type) {
		case SET_FILTER:
			newState = {...state, filterValue: action.payload.filterValue};
			break;
		default:
			newState = state;
	}
	return newState;
}

export default filterReducer;