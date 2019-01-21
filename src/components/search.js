import React from 'react';

const Search = ({searchValue, setSearch, search}) =>{
	return(

		<div className = "input-group">
        <input className = "form-control" type = "text" value = {searchValue} onKeyDown = {(e) => {if (e.key === "Enter"){search()}}} onChange = {(event) => setSearch(event.target.value)}/>
        <input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {() => search()}/>
    </div>
	);
};


export default Search;