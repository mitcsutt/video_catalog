import { 
	MOVIE_LIST_INITIALIZING, 
	MOVIE_LIST_FETCH_REQUESTED,
	MOVIE_LIST_FETCH_SUCCESS, 
	MOVIE_LIST_FETCH_FAILURE 
} from '../constants/constants';

const movieReducer = (state = {
	movies: [],
	status: MOVIE_LIST_INITIALIZING,
	error: null,
}, action ) => {
	let newState;

	switch(action.type){
		case MOVIE_LIST_INITIALIZING:
			newState = { ...state, status: MOVIE_LIST_INITIALIZING, movies: [], error: null};
			break;
		case MOVIE_LIST_FETCH_REQUESTED:
			newState = { ...state, status: MOVIE_LIST_FETCH_REQUESTED, movies: [], error: null};
			break;
		case MOVIE_LIST_FETCH_SUCCESS:
			newState = { ...state, status: MOVIE_LIST_FETCH_SUCCESS, movies: action.payload.movies, error: null};
			break;
		case MOVIE_LIST_FETCH_FAILURE:
			newState = { ...state, status: MOVIE_LIST_FETCH_FAILURE, movies: [], error: action.payload.error};
			break;
		default:
			newState = state;

	}
	return newState;
}
export default movieReducer;