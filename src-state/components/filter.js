import React, {Component} from 'react';

class Filter extends Component{
	static defaultProps = {
		filterValue: ""
	}

	render(){
		const {filterValue, setFilter} = this.props;
		let filters = ["","movie","series"];
		let active = ["1","2","3"]
		for (let i = 0; i <3; i++){
			
			if (filters[i] === filterValue){
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
				</ul>
			</nav>
		);
	}
}

export default Filter;