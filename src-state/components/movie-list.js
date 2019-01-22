import React, { Component } from 'react';
import Header from '../components/header'; 
import Movies from '../containers/movies'; 
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

export default App;