import {
	SET_SEARCH
} from '../constants/constants';

const defaultState = {
	searchValue: "america",
};

const searchReducer = (state = defaultState, action ) => {
	let newState;

	switch(action.type) {
		case SET_SEARCH:
			newState = {...state, searchValue: action.payload.searchValue};
			break;
		default:
			newState = state;
	}
	return newState;
}

export default searchReducer;