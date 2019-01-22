import React from 'react';
import Search from "../containers/search-container";
import Filter from "../containers/filter-container";
import Paginate from "../containers/paginate-container";

const Header = () =>{

	return(
		<table className="table">
			<tbody>
				<tr>
					<td className = "header-row page-select">
						<Paginate />
					</td>
					<td className = "header-row search">
						<Search />
					</td>
					<td className = "header-row filter">
						<Filter />
					</td>
				</tr>
			</tbody>
		</table>
	);
	
}

export default Header;