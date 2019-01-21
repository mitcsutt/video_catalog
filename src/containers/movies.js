import Movies from '../components/movies';
import {connect} from 'react-redux';
import { fetchMoviesThunk, initMovieList } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    initMovies: () => {
        dispatch( initMovieList() );
    },
    fetchMoviesThunk: () => {
        dispatch( fetchMoviesThunk() );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( Movies );