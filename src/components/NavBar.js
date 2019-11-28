import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div style={{borderBottom:"1px solid #dbdbdb"}} className="row align-items-center">
            <div className="col-4">
                <div className="nav-logo">
                    DataBag
                </div>
            </div>
        </div>
    );
}


export default NavBar;