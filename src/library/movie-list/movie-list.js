import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Movies from './components/movies';
import Header from "./components/header";
import axios from 'axios';
import * as Constants from '../../actions/constants';

class App extends Component {

  	constructor(props){
    	super(props);
    	this.state = {
			API: "5c9259f7",
			searchValue: "american",
			currentPage: 1,
			totalPage: 0,

			currentFiltered: "",

			status: Constants.MOVIES_LIST_INITIALIZING,
			movies: [],
			results: 0,
            error: null,
    	};
	}  
    render() {
      	return (
       		<div className = "container">
				<Header 
					//**** Search Bar Props ****/
					searchValue = {this.state.searchValue}
					//Gets the input from the search box
					setSearchValue={(searchValue) => this.setState({searchValue})} 
					handleSearch={() => {
						this.setState({currentPage: 1})
						this.getMovies()
						
					}} 

					//**** Pagination Props ****/
					currentPage = {this.state.currentPage}
					totalPage = {this.state.totalPage}
					handlePageChange={(currentPage) => {
						console.log(currentPage);
						this.setState({currentPage: currentPage})
						this.getMovies()
					}}
					results = {this.state.results}

					//**** Filtered Props */
					currentFiltered = {this.state.currentFiltered}
					handleFilterChange = {(filter) => {
						this.setState({
							currentPage: 1,
							currentFiltered: filter
						})
						this.getMovies();
					}}
				
				/>
				<Movies movies={this.state.movies}/>

          		<div>{this.state.searchValue}</div>
        	</div>
      	);
    }

	getMovies = () =>{
		this.setState(
            {
                status: Constants.MOVIES_FETCH_REQUESTED,
				error: null,
            },
            () => { // callback on actual setting up of state by react
				axios.get( "http://www.omdbapi.com/",
				{
					params: {
						s: this.state.searchValue,
						apikey: this.state.API,
						page: this.state.currentPage,
						type: this.state.currentFiltered
					}
				})
				.then( response => response.data )
				.then( movies => this.setState({
					status: Constants.MOVIES_FETCH_SUCCESS,
					movies: movies.Search,
					results: movies.totalResults,
					totalPage: Math.ceil(movies.totalResults/10),
				}))
				.catch( error => this.setState({
					status: Constants.MOVIES_FETCH_FAILURE,
					movies: [],
					error: error
				}));
            }
        );
	}
	componentDidMount() {
        this.getMovies();
    }


}
export default App;