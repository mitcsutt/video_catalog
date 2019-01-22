import { 
	MOVIE_INITIALIZING, 
	MOVIE_FETCH_REQUESTED,
	MOVIE_FETCH_SUCCESS, 
	MOVIE_FETCH_FAILURE,
	MOVIE_FETCH_NO_RESULTS
} from '../constants/constants';

const movieReducer = (state = {
	movies: [],
	status: MOVIE_INITIALIZING,
	error: null,
}, action ) => {
	let newState;

	switch(action.type){
		case MOVIE_INITIALIZING:
			newState = { ...state, status: MOVIE_INITIALIZING, movies: [], error: null};
			break;
		case MOVIE_FETCH_REQUESTED:
			newState = { ...state, status: MOVIE_FETCH_REQUESTED, movies: [], error: null};
			break;
		case MOVIE_FETCH_SUCCESS:
			return { ...state, status: MOVIE_FETCH_SUCCESS, movies: action.payload.Search, error: null}; // should return here rather than setting variables
		case MOVIE_FETCH_FAILURE:
			newState = { ...state, status: MOVIE_FETCH_FAILURE, movies: [], error: action.payload.error};
			break;
		case MOVIE_FETCH_NO_RESULTS:
		newState = { ...state, status: MOVIE_FETCH_NO_RESULTS, movies: [], error: null};
		break;
		default:
			newState = state;

	}
	return newState;
}
export default movieReducer;