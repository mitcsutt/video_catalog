import React from 'react';

// const Paginate = ({setPageNumber, handlePageChange}) =>(

// 	<nav aria-label="Page navigation">
// 		<ul className="pagination">
// 		<li className="page-item disabled">
// 			<a className="page-link" href="/link" aria-label="Previous">
// 			<span aria-hidden="true">&laquo;</span>
// 			<span className="sr-only">Previous</span>
// 			</a>
// 		</li>
// 		<li className="page-item active"><a className="page-link" href="/link">1</a></li>
// 		<li className="page-item"><a className="page-link" href="/link">2</a></li>
// 		<li className="page-item">
// 			<a className="page-link" href="/link" aria-label="Next">
// 			<span aria-hidden="true">&raquo;</span>
// 			<span className="sr-only">Next</span>
// 			</a>
// 		</li>
// 		</ul>
// 	</nav>
// );
const ListItem = ({active, number}) =>(
	<li className={`page-item ${active}`}><a className="page-link" href="/link">{number}</a></li>
);


const Paginate = ({setPageNumber, handlePageChange}) =>(

	<nav aria-label="Page navigation">
		<ul className="pagination">
		<li className="page-item disabled">
			<a className="page-link" href="/link" aria-label="Previous">
			<span aria-hidden="true">&laquo;</span>
			<span className="sr-only">Previous</span>
			</a>
		</li>
		<ListItem active={"active"} number={1} />
		<ListItem active={""} number={2} />
		<ListItem active={""} number={3} />
		<li className="page-item">
			<a className="page-link" href="/link" aria-label="Next">
			<span aria-hidden="true">&raquo;</span>
			<span className="sr-only">Next</span>
			</a>
		</li>
		</ul>
	</nav>
);

export default Paginate;