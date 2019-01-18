import {
	INIT_SEARCH, 
	SET_PAGE, 
	SET_SEARCH, 
	SET_FILTER
} from '../constants/constants';

const headerReducer = (state = {
	currentPage: 1,
	searchValue: "america",
	filter: "",
}, action ) => {
	let newState;

	switch(action.type) {
		case INIT_SEARCH:
			newState = {...state, currentPage: 1, searchValue: "america", filter: ''};
			break;
		case SET_PAGE:
			newState = {...state, currentPage: action.payload.currentPage};
			break;
		case SET_SEARCH:
			newState = {...state, searchValue: action.payload.searchValue};
			break;
		case SET_FILTER:
			newState = {...state, filter: action.payload.currenfilter};
			break;
		default:
			newState = state;
	}
	return newState;
}

export default headerReducer;