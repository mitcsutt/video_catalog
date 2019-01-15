import React from 'react';

const getLineItems = ({items}) =>{

	return items.map(item => (

		<tr key = {item.id}>
			<td style={ { color: 'crimson', fontSize : '20px' } }>{item.id}</td>
			<td>{item.title}</td>
			<td>{item.description}</td>
			<td>{item.rating}</td>
			<td>{item.year}</td>
			<td><button className="btn btn-danger" >&times;</button></td>
		</tr>
  	));
}
const Movie = ({items,currentPage}) => {

	return (
		<div className="container">
			<hr />
			<h1>Page number is {currentPage}</h1>
			<table className="table table-bordered table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Rating</th>
						<th>Year</th>
						<th>Delete the item</th>
					</tr>
				</thead>
			<tbody>{getLineItems({items})}</tbody>
			</table>
		</div>
	);
}

export default Movie;