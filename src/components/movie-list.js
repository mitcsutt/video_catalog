import React, { Component } from 'react';
import Header from '../components/header'; 
import Movies from '../containers/movies'; 
import {Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'



class App extends Component {
    render() {
        return (
            <div>
                <Header />
				<Movies />
            </div>
        );
    }
}

//http://localhost:3000/?s=american&p=3&type=movie

export default App;