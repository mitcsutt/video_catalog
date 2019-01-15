import React, { Component } from 'react';
import '../../styles/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Movies from './components/movie-list';
import MovieImport from '../../data/movies.json';
import Header from "./components/header";
import axios from 'axios';
import * as Constants from '../../actions/constants';

const items = MovieImport ? MovieImport : [];
//const search = <Search fn = {} />

class App extends Component {

  	constructor(props){
    	super(props);
    	this.state = {
			API: "5c9259f7",
			searchValue: "american",
			currentPage: 1,
			totalPage: 10,
			filteredItems: [],

			status: Constants.QUESTIONS_LIST_INITIALIZING,
            movies: [],
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
				<Movies items={items} currentPage = {this.state.currentPage}/>

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
	componentDidMount() {
        this.setState(
            {
                status: Constants.MOVIES_FETCH_REQUESTED,
                error: null
            },
            () => { // callback on actual setting up of state by react
                axios.get( `https://api.stackexchange.com/2.0/questions?site=stackoverflow&pagesize=10&page=${this.state.page}` )
                    .then( response => response.data )
                    .then( data => data.items )
                    .then( questions => this.setState({
                        status: Constants.MOVIES_FETCH_SUCCESS,
                        questions: questions
                    }))
                    .catch( error => this.setState({
                        status: Constants.MOVIES_FETCH_FAILURE,
                        questions: [],
                        error: error
                    }));
            }
        );
    }


}
export default App;