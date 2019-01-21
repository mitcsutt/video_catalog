import React from 'react';

const getLineItems = ({movies}) =>{
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
const Movie = ({movies}) => {

	return (
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
}

export default Movie;