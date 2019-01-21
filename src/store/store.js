import { createStore, combineReducers, applyMiddleware } from 'redux';
import headerReducer from '../reducers/header';
import movieReducer from '../reducers/movies';
import thunk from 'redux-thunk';

import * as Constants from '../constants/constants';

const store = createStore(

	combineReducers(
		{
			header: headerReducer,
			movies: movieReducer,
		}
	),
	{
		header: {
			currentPage: 1,
			totalPage: 1,
			searchValue: "america",
			filter: "",
			API: "5c9259f7"
		},
		movies: {
			movies: [],
			status: Constants.MOVIE_INITIALIZING,
			error: null,
		}
	},
	applyMiddleware( thunk )
);

export default store;