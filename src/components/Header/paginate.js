import React from 'react';


const ListItem = ({active, number, handlePageChange}) =>{
	return(
		<li className={`page-item ${active}`}><button className="page-link"  onClick = {() => handlePageChange(number)}>{number}</button></li>
	);
}


const Pages = ({currentPage, totalPage,handlePageChange}) => {
	const current = currentPage;
	const totalNum = totalPage;
	const min = current - 2, max = current +2;
	let totalPageArray = [], splitPageArray = [];
	let pages = [];

	for (let i = 1; i <= totalNum; i++){
		totalPageArray[i-1] = i;
	}
	
	if(totalNum <= 5){
		splitPageArray = totalPageArray.slice(0,5);
	}
	else if (min < 1){
		splitPageArray = totalPageArray.slice(0,5);
	}
	else if (max > totalNum){
		splitPageArray = totalPageArray.slice(totalNum-5,totalNum);
	}	
	else{
		splitPageArray = totalPageArray.slice(min-1,max);

	}

	splitPageArray.forEach(function(i){
		if(i === current){
			pages.push(<ListItem key = {i} active={"active"} number={i} handlePageChange = {handlePageChange}/>);
		}
		else{
			pages.push(<ListItem key = {i} active={""} number={i} handlePageChange = {handlePageChange}/>);
		}
	});
	return pages;
}

const Disabled = ({currentPage, totalPage, label, arrow}) => {
	const current = currentPage;
	const totalNum = totalPage;
	let disabled = "";
	if(current <= 1 && label === "Previous"){
		disabled = "disabled" 
	}
	else if(current >= totalNum && label === "Next"){
		disabled = "disabled" 
	}
	return(
	<li className= {`page-item ${disabled}`}>
		<button className="page-link" aria-label={label}>
		<span aria-hidden="true">{arrow}</span>
		</button>
	</li>
	);	
}

const Paginate = ({currentPage, totalPage, handlePageChange, results}) =>(

	<nav aria-label="Page navigation">
		<ul className="pagination">
		<Disabled  currentPage = {currentPage} totalPage = {totalPage} label = "Previous" arrow = "&laquo;" />
		<Pages currentPage = {currentPage} totalPage = {totalPage} handlePageChange= {handlePageChange}/>
		<Disabled  currentPage = {currentPage} totalPage = {totalPage} label = "Next" arrow = "&raquo;" />
		</ul>
		<p>Page {currentPage} of {totalPage} <br></br>
		Returned {results} results</p>
	</nav>
);

export default Paginate;