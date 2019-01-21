import React from 'react';

const Search = ({searchValue, setSearch}) =>{
	return(

		<div className = "input-group">
        <input className = "form-control" type = "text" value = {searchValue} onChange = {(event) => setSearch(event.target.value)}/>
        <input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {() => console.log("click")}/>
    </div>
	);
};


export default Search;