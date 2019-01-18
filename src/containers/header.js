import Header from '../components/header';
import {connect} from 'react-redux';
import { setPage, setSearch, setFilter, initSearch } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    initMovies: () => {
        dispatch( initMovies() );
    },
    fetchMoviesThunk: () => {
        dispatch( fetchMoviesThunk() );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( Movies );