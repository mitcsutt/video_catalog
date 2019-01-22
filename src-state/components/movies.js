import React, {Component} from 'react';
import * as Constants from '../constants/constants';

// Maybe go in seperate file?
function getLineItems (movies){
	let style = {width: '50px'};
	return movies.map(movie => (
		<tr key = {movie.imdbID}>
			<td><img className = "rounded mx-auto d-block" style = {style} src ={movie.Poster} alt = {`${movie.Title} poster`}></img></td>
			<td>{movie.Title}</td>
			<td>{movie.Type}</td>
			<td>{movie.Year}</td>
		</tr>
	));
}

class Movies extends Component {

	// should always have default props
	static defaultProps = {
		movies: [],
		status: null,
		error: ""
	}
	render() {

		let el; 
		const { status, movies, error } = this.props;
		switch( status ) {
            case Constants.MOVIE_FETCH_REQUESTED:
                el = (
                    <div className="alert alert-info">
                        Movies are being fetched. Please wait...
                    </div>
                );
                break;
            case Constants.MOVIE_FETCH_SUCCESS:
                el = (
                    <div>
						<hr />
						<table className="table table-bordered table-striped table-hover">
							<thead>
								<tr>
									<th>Poster</th>
									<th>Title</th>
									<th>Type</th>
									<th>Year</th>
								</tr>
							</thead>
						<tbody>{getLineItems(movies)}</tbody>
						</table>
					</div>
                );
                break;
            case Constants.MOVIE_FETCH_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Oops! Something went wrong when fetching product details.
                        <br />
                        [Error details: {error.message}]
                    </div>
                );
				break;
			case Constants.MOVIE_FETCH_NO_RESULTS:
			el = (
				<div className="alert alert-danger">
					Search Results returned nothing
					<br />
					Try again with a different search value or filters
				</div>
			);
			break;
            default:
                el = (
                    <div className="alert alert-info">
                        Loading the page. Please wait...
                    </div>
                );
		}

		return el; // could just return from each switch statement.
	}

	componentDidMount() {
		const { searchValue, API, currentPage, currentFiltered, fetchMoviesThunk } = this.props;
        fetchMoviesThunk(searchValue, API, currentPage, currentFiltered);
    }

}
export default Movies;