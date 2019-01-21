import Movies from '../components/movies';
import {connect} from 'react-redux';
import { fetchMoviesWithCurrentFilters, initMovies } from '../actions/creators';

const mapStateToProps = ( state ) => ({
	movies: state.movies,
});

// const mapDispatchToProps = (dispatch, getState) => {
// 	const {searchValue, API, currentPage, currentFiltered} = getState().header;
	
// 	return{
// 		initMovies: () => {
// 			dispatch( initMovies() );
// 		},
// 		fetchMoviesThunk: () => {
// 			dispatch( fetchMoviesThunk(searchValue, API, currentPage, currentFiltered) );
			
// 		}


// 	}
// };

export default connect( mapStateToProps, {initMovies, fetchMoviesWithCurrentFilters} )( Movies );