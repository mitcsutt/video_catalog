import * as Constants from '../constants/constants';
import axios from 'axios';

export const initMovieList = () => ({
    type: Constants.MOVIE_LIST_INITIALIZING
});

export const fetchMovieList = () => ({
    type: Constants.MOVIE_FETCH_REQUESTED
});

export const fetchMovieListSuccess = ( movie ) => ({
    type: Constants.MOVIE_FETCH_SUCCESS,
    payload: {
        movie: movie,
    }
});

export const fetchMovieListFailure = ( error ) => ({
    type: Constants.MOVIE_FETCH_FAILURE,
    payload: {
        error: error
    }
});


export const initSearch = () => ({
	type: Constants.INIT_SEARCH,
});

export const setPage = (page) => ({
	type: Constants.SET_PAGE,
	payload: {
		currentPage: page
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

