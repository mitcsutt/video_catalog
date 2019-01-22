import { createStore, combineReducers, applyMiddleware } from 'redux';
import headerReducer from '../reducers/header';
import movieReducer from '../reducers/movies';
import thunk from 'redux-thunk';

const store = createStore(

	combineReducers(
		{
			header: headerReducer,
			movies: movieReducer,
		}
	),
	applyMiddleware( thunk )
);

export default store;