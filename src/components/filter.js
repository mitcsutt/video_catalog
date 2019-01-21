import React from 'react';

const Filter = ({filter, setFilter}) =>{

	let filters = ["","movie","series","episode"];
	let active = ["1","2","3","4"]
	for (let i = 0; i <4; i++){
		
		if (filters[i] === filter){
			active[i] = "active";
		}
	}
	return(
		//For git test
		<nav aria-label="Page navigation">
			<ul className="pagination">
			<li className={`page-item ${active[0]}`}><button onClick = {() => setFilter("")} className="page-link" href="/index">Anything</button></li>
			<li className={`page-item ${active[1]}`}><button onClick = {() => setFilter("movie")} className="page-link" href="/index">Movies</button></li>
			<li className={`page-item ${active[2]}`}><button onClick = {() => setFilter("series")} className="page-link" href="/index">TV</button></li>
			<li className={`page-item ${active[3]}`}><button onClick = {() => setFilter("episode")} className="page-link" href="/indexcl">Episodes</button></li>
			</ul>
		</nav>
	);
};


export default Filter;