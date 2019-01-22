import * as Constants from '../constants/constants';
import axios from 'axios';

export const initMovies = () => ({
    type: Constants.MOVIE_INITIALIZING
});

export const fetchMovieList = () => ({
    type: Constants.MOVIE_FETCH_REQUESTED
});

export const fetchMovieListSuccess = ( payload ) => ({
 
	   	type: Constants.MOVIE_FETCH_SUCCESS,
	    payload // should push the entire payload IMO here
	
});

export const fetchMovieListFailure = ( error ) => ({
    type: Constants.MOVIE_FETCH_FAILURE,
    payload: {
        error: error
    }
});

export const fetchMovieListEmpty = () =>({
	type: Constants.MOVIE_FETCH_NO_RESULTS
});


// call this when ever anything changes
export function fetchMoviesThunk() {
    return function( dispatch, getState) {
        
    	const state = getState();
    	const { filter, search, paginate } = state;
		const { searchValue } = search;
		const { currentPage } = paginate;
		const { filterValue } = filter;

        dispatch( fetchMovieList() );

        axios.get( "http://www.omdbapi.com/",
		{
			params: {
				s: searchValue,
				apikey: '5c9259f7',
				page: currentPage,
				type: filterValue
			}
		})
		.then( response => response.data )
		.then( movies => {
			if (movies.totalResults != null){
				dispatch( fetchMovieListSuccess( movies ) );
			}
			else{
				dispatch(fetchMovieListEmpty());
			}
			
		} )
		//.then( movies => dispatch( fetchMovieListSuccess( movies ) ) )
		.catch( error => {
			dispatch( fetchMovieListFailure( error ) );
		});
    }
}


export const setPage = (page) => (dispatch) => {

	dispatch({
		type: Constants.SET_PAGE,
		payload: {
			currentPage: page
	}});

	dispatch(fetchMoviesThunk());
};

export const setTotalPage = (totalPage) => (dispatch) => {
	dispatch({
		type: Constants.SET_TOTAL_PAGE,
		payload: {
			totalPage: totalPage
		}
	});
};

export const setSearch = (search) => (dispatch) => {
	dispatch({
		type: Constants.SET_SEARCH,
		payload: {
			searchValue: search
		}
	});
};
export const handleSearch = () => (dispatch) => {
	dispatch(setPage(1));
	dispatch(fetchMoviesThunk());
};

// can dispatch multiple..
export const setFilter = (filterValue) => (dispatch) => {
	dispatch({
		type: Constants.SET_FILTER,
		payload: {
			filterValue: filterValue
		}
	});
	dispatch(setPage(1));
	dispatch(fetchMoviesThunk());
};



