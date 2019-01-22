import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../containers/header'; 
import Movies from '../containers/movies'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css'



class App extends Component {
    render() {
        return (
            <div>
                <Header />
				<Movies /> 
                {/* <Switch>
                    <Route path="/products" component={Movies} exact />
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch> */}
            </div>
        );
    }
}

export default App;