import {
	INIT_SEARCH, 
	SET_PAGE, 
	SET_TOTAL_PAGE,
	SET_SEARCH, 
	SET_FILTER,
	MOVIE_FETCH_SUCCESS
} from '../constants/constants';

const defaultState = {
	currentPage: 1,
	totalPage: 1,
	searchValue: "america",
	API: '5c9259f7',
	filter: "",
	perPage: 10 // per page should be saved in a reducer in real app
};

const headerReducer = (state = defaultState, action ) => {
	let newState;

	switch(action.type) {
		
		// can listen for actions from other reducers..
		case MOVIE_FETCH_SUCCESS:
			return {
				...state,
				totalPage: Math.ceil( action.payload.totalResults / 10)
			}
			
			return state;

		case SET_PAGE:
			newState = {...state, currentPage: action.payload.currentPage};
			break;
		case SET_TOTAL_PAGE:
			newState = {...state, totalPage: action.payload.totalPage};
			break;
		case SET_SEARCH:
			newState = {...state, searchValue: action.payload.searchValue};
			break;
		case SET_FILTER:
			newState = {...state, filter: action.payload.filter};
			break;
		default:
			newState = state;
	}
	return newState;
}

export default headerReducer;