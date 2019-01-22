import React, {Component} from 'react';

class Search extends Component{
	static defaultProps = {
		searchValue: "america"
	}

	render(){
		console.log(this.props);
		const {searchValue, setSearch, handleSearch} = this.props;
		return(
			<div className = "input-group">
			<input className = "form-control" type = "text" value = {searchValue} onKeyDown = {(e) => {if (e.key === "Enter"){handleSearch()}}} onChange = {(event) => setSearch(event.target.value)}/>
			<input name="" id="" className="btn btn-primary" type="button" value="Search" onClick = {() => handleSearch()}/>
		</div>
		);
	}
}

export default Search;