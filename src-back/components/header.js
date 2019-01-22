import {Component} from 'react';

import React from 'react';
import Search from "./search";
import Filter from "./filter";
import Paginate from "./paginate";

class Header extends Component{
	constructor( props ) {
        super( props );
    }

	render() {

		const { currentPage, searchValue, filter, totalPage} = this.props.header;
		console.log(this.props);
		return(
			<table className="table">
				<tbody>
					<tr>
						<td className = "header-row page-select">
							<Paginate 
								currentPage = {currentPage} 
								totalPage = {totalPage}
								setPage = {this.props.setPage}
							/>
						</td>
						<td className = "header-row search">
							<Search 
								searchValue = {searchValue}
								setSearch = {this.props.setSearch}
							/>
						</td>
						<td className = "header-row filter">
							<Filter 
								filter = {filter}
								setFilter = {this.props.setFilter}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Header;