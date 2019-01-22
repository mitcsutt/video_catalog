import * as Constants from '../constants/constants';
import axios from 'axios';

export const initMovies = () => ({
    type: Constants.MOVIE_INITIALIZING
});

export const fetchMovieList = () => ({
    type: Constants.MOVIE_FETCH_REQUESTED
});

export const fetchMovieListSuccess = ( payload ) => {
    return { 
	   	type: Constants.MOVIE_FETCH_SUCCESS,
	    payload // should push the entire payload IMO here
	}
};

export const fetchMovieListFailure = ( error ) => ({
    type: Constants.MOVIE_FETCH_FAILURE,
    payload: {
        error: error
    }
});


// call this when ever anything changes
export function fetchMoviesThunk() {
    return function( dispatch, getState) {
        
    	const state = getState();
    	const { header } = state;
    	const { searchValue, currentPage, filter } = header;

        dispatch( fetchMovieList() );

        axios.get( "http://www.omdbapi.com/",
		{
			params: {
				s: searchValue,
				apikey: '5c9259f7',
				page: currentPage,
				type: filter
			}
		})
            .then( response => response.data )
            .then( movies => dispatch( fetchMovieListSuccess( movies ) ) )
            .catch( error => dispatch( fetchMovieListFailure( error ) ) );
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

export const setTotalPage = (totalPage) => ({
	type: Constants.SET_TOTAL_PAGE,
	payload: {
		totalPage: totalPage
	}
});

export const setSearch = (search) => (dispatch) => {
	dispatch({
		type: Constants.SET_SEARCH,
		payload: {
			searchValue: search
		}
	});
	dispatch(fetchMoviesThunk());
};


// can dispatch multiple..
export const setFilter = (filter) => (dispatch) => {
	dispatch({
		type: Constants.SET_FILTER,
		payload: {
			filter: filter
		}
	});
	dispatch(fetchMoviesThunk());
};



