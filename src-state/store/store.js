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
