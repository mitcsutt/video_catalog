import React from 'react';

const Search = ({setSearchValue, handleSearch}) =>(

    <div>
        <input className = "form-control" type = "text" onChange = {(event) => setSearchValue(event.target.value)}/>
        <input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {handleSearch}/>
    </div>
);

export default Search;