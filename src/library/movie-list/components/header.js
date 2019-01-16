import React from 'react';
import Search from "../../../components/header/search";
import Filter from "../../../components/header/filter";
import Paginate from "../../../components/header/paginate";

const Header = ({
	searchValue,
    setSearchValue,
	handleSearch,
	currentPage,
	totalPage,
	handlePageChange,
	results,
	currentFiltered,
	handleFilterChange,
}) => (
    <table className="table">
        <tbody>
            <tr>
                <td className = "header-row page-select">
					<Paginate 
						currentPage = {currentPage} 
						totalPage = {totalPage} 
						handlePageChange = {handlePageChange}
						results = {results}
					/>
				</td>
                <td className = "header-row search">
					<Search 
						searchValue = {searchValue} 
						setSearchValue={setSearchValue} 
						handleSearch={handleSearch} 
					/>
                </td>
                <td className = "header-row filter">
					<Filter 
						currentFiltered = {currentFiltered} 
						handleFilterChange = {handleFilterChange}
					/>
				</td>
            </tr>
        </tbody>
    </table>
);

export default Header;