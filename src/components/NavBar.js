import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <div style={{ borderBottom: "1px solid #dbdbdb" }} className="row align-items-center">
            <div className="col-4">
                <div className="nav-logo no-select">
                    <Link to="/" className="nav-link">DataBag</Link>
                </div>
            </div>
        </div>
    );
}


export default NavBar;