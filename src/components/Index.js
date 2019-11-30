import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Index = () => {
    return (
        <div style={{ backgroundImage: "url('/back.jpg')", backgroundSize: "cover", minHeight: "90vh" }} className="row align-items-center">
            <div className="col-md-5 text-center">
                <div className="welcome-lg">Welcome to DataBag!</div>
                <div className="welcome-sm"> A safe place for all your files. Store, share, and access your files from any device.</div>
                <Link to="/home" className="no-style" ><button className="btn btn-wlc">Go to DataBag</button></Link>
                <div className="welcome-love">
                    Made with <span style={{ color: "red" }}><FontAwesomeIcon icon={faHeart} /></span> by <a className="no-link-style" href="https://github.com/rumeetsingh" rel="noopener noreferrer" target="_blank">Rumeet Singh</a>
                </div>
            </div>
        </div>
    );
}


export default Index;