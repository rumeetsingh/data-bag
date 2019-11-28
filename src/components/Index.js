import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


const Index = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {uuid.v4()}
                </p>
                <Link to="home/" className="App-link">
                    Go to DataBag
                </Link>
            </header>
        </div>
    );
}


  export default Index;