import {
	SET_PAGE, 
	SET_TOTAL_PAGE,
	MOVIE_FETCH_SUCCESS
} from '../constants/constants';

const defaultState = {
	currentPage: 1,
	totalPage: 1,
	perPage: 10
};

const paginateReducer = (state = defaultState, action ) => {
	let newState;

	switch(action.type) {
		
		// can listen for actions from other reducers..
		case MOVIE_FETCH_SUCCESS:
			return {
				...state,
				totalPage: Math.ceil( action.payload.totalResults / 10)
			}
		case SET_PAGE:
			newState = {...state, currentPage: action.payload.currentPage};
			break;
		case SET_TOTAL_PAGE:
			newState = {...state, totalPage: action.payload.totalPage};
			break;
		default:
			newState = state;
	}
	return newState;
}

export default paginateReducer;