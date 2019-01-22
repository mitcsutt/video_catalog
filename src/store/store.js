import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import movieReducer from '../reducers/movies-reducer';
import searchReducer from '../reducers/search-reducer';
import filterReducer from '../reducers/filter-reducer';
import paginateReducer from '../reducers/paginate-reducer';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers(
	{
		search: searchReducer,
		filter: filterReducer,
		paginate: paginateReducer,
		movies: movieReducer,
	}
	), /* preloadedState, */ composeEnhancers(

	
	applyMiddleware(thunk)
));

export default store;

/*
currentPage: 1,
	totalPage: 1,
	searchValue: "america",
	API: '5c9259f7',
	filter: "",
	perPage: 10 // per page should be saved in a reducer in real app
	*/