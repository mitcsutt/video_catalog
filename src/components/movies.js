import React, {Component} from 'react';
import * as Constants from '../constants/constants';

function getLineItems ({movies}){
	let style = {width: '50px'};
	return movies.map(movie => (
		
		<tr key = {movies.imdbID}>
			<td><img className = "rounded mx-auto d-block" style = {style} src ={movie.Poster} ></img></td>
			<td>{movie.Title}</td>
			<td>{movie.Type}</td>
			<td>{movie.Year}</td>
		</tr>
	));
}

class Movies extends Component {
	constructor( props ) {
		super( props );
		this.props.initMovies();
	}

	render(){
		let el;
		const { status, movies, error } = this.props.movies;

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
						<tbody>{getLineItems({movies})}</tbody>
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
            default:
                el = (
                    <div className="alert alert-info">
                        Loading the page. Please wait...
                    </div>
                );
				break;				
		}
		return el;
	}

	componentDidMount() {
        this.props.fetchMoviesThunk();
    }
}
export default Movies;