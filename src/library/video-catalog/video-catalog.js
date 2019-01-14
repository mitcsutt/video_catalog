import React, { Component } from 'react';
import '../../styles/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Movies from './components/movie-list';
import MovieImport from '../../data/movies.json';
import Header from "./components/header";

const items = MovieImport ? MovieImport : [];
//const search = <Search fn = {} />
const movies = <Movies items={items}/>;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        searchValue: "american",
		pageNumber: 1,
		numResults: 0,
        filteredItems: [],
    };
}  
    render() {
      return (
        <div>
			<Header 
				//**** Search Bar Props ****/
				//Passing the current searchValue
				searchValue = {this.state.searchValue}
				//Gets the input from the search box
				setSearchValue={(searchValue) => this.setState({searchValue})} 
				//Performs the search when the button is clicked
				handleSearch={this.searchMovie} 
				
				//**** Pagination Props ****/
				//Gets the new page number when its changed
				setPageNumber={(pageNumber) => this.setState({pageNumber})}
				//Handles the display of new page
				handlePageChange={this.newPage}
			/>
			{movies}

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
      console.log(this.state.pageNumber);
    }


}
export default App;