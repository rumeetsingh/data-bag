import React from 'react';
import { Link } from 'react-router-dom';


const RenderLinks = props => {
    return props.list.map(b => {
        return (
            <span key={b}><Link to={"/" + b} className="no-link-style">{props.folders[b].name}</Link> / </span>
        );
    })
}

const Bread = props => {
    return (
        <div style={{padding:"10px 20px"}} className="card mt-3">
            <div className="bread-lg-header">
                <RenderLinks list={props.data} folders={props.folders} />
            </div>
        </div>
    );
}

export default Bread;
