import React from 'react';

const Search = ({searchValue, setSearchValue, handleSearch}) =>(

    <div className = "input-group">
        <input className = "form-control" type = "text" value = {searchValue} onChange = {(event) => setSearchValue(event.target.value)}/>
        <input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {handleSearch}/>
    </div>
);

export default Search;