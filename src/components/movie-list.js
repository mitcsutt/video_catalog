import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../containers/header'; // no need to wrap it in a container since it does not use state
import Movies from '../containers/movies'; // no need to wrap it in a container since it does not use state

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/" component={About} exact />
                    <Route path="/products" component={Movies} exact />
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
            </div>
        );
    }
}

export default App;