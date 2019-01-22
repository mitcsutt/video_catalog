import Movies from '../components/movies';
import {connect} from 'react-redux';
import { fetchMoviesThunk, initMovies } from '../actions/creators';

const mapStateToProps = ( state ) => ({
	...state.movies, // you want ALL of the movies state
	...state.header, // AND all of the header state
});

// dont need to wrap functions in dispatch, they are already
export default connect( mapStateToProps, {
	initMovies,
	fetchMoviesThunk
} )( Movies );