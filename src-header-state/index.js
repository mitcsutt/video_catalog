import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/movie-list';
import Store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Provider store = {Store}>
		<Router>
			<Movie />
		</Router>
	</Provider>
	, document.getElementById('root')
);
