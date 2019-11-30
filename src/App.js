import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history';
import './App.css';

import Index from './components/Index';
import NavBar from './components/NavBar';
import Home from './components/Home';


class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/:folderId" exact component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
