import React from 'react';


const Filter = ({currentFiltered, handleFilterChange}) =>{

	let filters = ["","movie","series","episode"];
	let active = ["","","",""]

	for (let i = 0; i <4; i++){
		if (filters[i] == currentFiltered){
			active[i] = "active";
		}
	}
	return(

		<nav aria-label="Page navigation">
			<ul className="pagination">
			<li className={`page-item ${active[0]}`}><button onClick = {() => handleFilterChange("")} className="page-link" href="/index">Anything</button></li>
			<li className={`page-item ${active[1]}`}><button onClick = {() => handleFilterChange("movie")} className="page-link" href="/index">Movies</button></li>
			<li className={`page-item ${active[2]}`}><button onClick = {() => handleFilterChange("series")} className="page-link" href="/index">TV</button></li>
			<li className={`page-item ${active[3]}`}><button onClick = {() => handleFilterChange("episode")} className="page-link" href="/indexcl">Episodes</button></li>
			</ul>
		</nav>
	);
};


export default Filter;