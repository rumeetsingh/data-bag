import React from 'react';


class createFile extends React.Component{

    state = { name:"" };

    hide = () => {
        this.props.handle();
    }

    onInputChange = (ev) => {
        this.setState({name:ev.target.value});
    }

    render() {
        return (
            <div className="card mt-3">
                <div style={{padding:"0px 10px"}} className="row align-items-center">
                    <div className="col-lg-9 col-md-7">
                        <div className="card-item-input">
                            <input onChange={this.onInputChange} value={this.state.name} className="input w-100" type="text" placeholder="Enter File URL" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="card-item-input">
                            <button className="btn btn-blue w-100">Create</button>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <div className="card-item-input">
                            <button onClick={this.hide} className="btn btn-red w-100">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default createFile;
