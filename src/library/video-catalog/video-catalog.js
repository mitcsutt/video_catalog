import React, { Component } from 'react';
import '../../styles/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Movies from './components/movie-list';
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
			totalPage: 10,
			filteredItems: [],

			status: Constants.MOVIES_LIST_INITIALIZING,
			movies: [],
			results: 0,
            error: null,
    	};
	}  
    render() {
      	return (
       		<div>
				<Header 
					//**** Search Bar Props ****/
					searchValue = {this.state.searchValue}
					//Gets the input from the search box
					setSearchValue={(searchValue) => this.setState({searchValue})} 
					handleSearch={this.searchMovie} 

					//**** Pagination Props ****/
					currentPage = {this.state.currentPage}
					totalPage = {this.state.totalPage}
					handlePageChange={(currentPage) => this.setState({currentPage})}
				
				/>
				<Movies movies={this.state.movies} results = {this.state.results}/>

          		<div>{this.state.searchValue}</div>
        	</div>
      	);
    }

    searchMovie = () =>
    {
      	console.log(this.state.searchValue);
	}
	newPage = () =>
    {
		console.log("New Page = " + this.state.page.current);
	}

	getMovies = () =>{
		this.setState(
            {
                status: Constants.MOVIES_FETCH_REQUESTED,
                error: null
            },
            () => { // callback on actual setting up of state by react
				axios.get( "http://www.omdbapi.com/",
				{
					params: {
						s: this.state.searchValue,
						apikey: this.state.API,
						page: this.state.currentPage,
					}
				})
				.then( response => response.data )
				.then( movies => this.setState({
					status: Constants.MOVIES_FETCH_SUCCESS,
					movies: movies.Search,
					results: movies.totalResults,
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