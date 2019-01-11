import React from 'react';
import Search from "./search";
import Filter from "./filter";
import Paginate from "./paginate";

const Header = ({
    setSearchValue,
    handleSearch,
}) => (
    <table className="table">
        <tbody>
            <tr>
                <td className = "header-row page-select"><Paginate /></td>
                <td className = "header-row search">
                    <Search setSearchValue={setSearchValue} handleSearch={handleSearch} />
                </td>
                <td className = "header-row filter"><Filter /></td>
            </tr>
        </tbody>
    </table>
);

export default Header;