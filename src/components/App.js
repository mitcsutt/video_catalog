import React, { Component } from 'react';
import '../styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Movies from './Movies';
import MovieImport from '../data/movies.json';
import Header from "./Header/header";

const items = MovieImport ? MovieImport : [];
//const search = <Search fn = {} />
const movies = <Movies items={items}/>;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        searchValue: null,
        filteredItems: [],
    };
}  
    render() {
      return (
        <div>
          <Header setSearchValue={(searchValue) => 
            this.setState({searchValue})} 
            handleSearch={this.searchMovie} 
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

}
export default App;