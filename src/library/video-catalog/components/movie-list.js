import React from 'react';

const getLineItems = ({movies}) =>{

	return movies.map(movie => (

		<tr>
			<td><img src ={movie.Poster} ></img></td>
			<td>{movie.Title}</td>
			<td>{movie.Type}</td>
			<td>{movie.Year}</td>
		</tr>
  	));
}
const Movie = ({movies,results}) => {

	return (
		<div className="container">
			<hr />
			<h1>Num results is {results}</h1>
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