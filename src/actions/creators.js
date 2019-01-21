import * as Constants from '../constants/constants';
import axios from 'axios';

export const initMovies = () => ({
    type: Constants.MOVIE_INITIALIZING
});

export const fetchMovieList = () => ({
    type: Constants.MOVIE_FETCH_REQUESTED
});

export const fetchMovieListSuccess = ( movies ) => ({
    type: Constants.MOVIE_FETCH_SUCCESS,
    payload: {
        movies: movies,
    }
});

export const fetchMovieListFailure = ( error ) => ({
    type: Constants.MOVIE_FETCH_FAILURE,
    payload: {
        error: error
    }
});

export const fetchMoviesWithCurrentFilters = () => (dispatch, getState) => {
	const state = getState();
	const {searchValue, API, currentPage, currentFiltered} = state.header;
	dispatch(fetchMoviesThunk(searchValue, API, currentPage, currentFiltered));
}

export const fetchMoviesThunk = (searchValue, API, currentPage, currentFiltered) => (dispatch) => {
	dispatch( fetchMovieList() );
	axios.get( "http://www.omdbapi.com/",
	{
		params: {
			s: searchValue,
			apikey: API,
			page: currentPage,
			type: currentFiltered
		}
	})
		.then( response => response.data )
		.then( movies => dispatch( fetchMovieListSuccess( movies ) ) )
		.catch( error => dispatch( fetchMovieListFailure( error ) ) );
};

export const setPage = (page) => ({
	type: Constants.SET_PAGE,
	payload: {
		currentPage: page
	}
});
export const setTotalPage = (totalPage) => ({
	type: Constants.SET_TOTAL_PAGE,
	payload: {
		totalPage: totalPage
	}
});

export const setSearch = (search) => ({
	type: Constants.SET_SEARCH,
	payload: {
		searchValue: search
	}
});

export const setFilter = (filter) => ({
	type: Constants.SET_FILTER,
	payload: {
		filter: filter
	}
});



