import React from 'react';
import { connect } from 'react-redux';
import { createFile } from '../../actions';


class createFil extends React.Component{

    state = { link:"" };

    componentDidMount() {
        this.refs.input.focus();
    }

    hide = () => {
        this.props.handle();
    }

    onInputChange = (ev) => {
        this.setState({link:ev.target.value});
    }

    onSubmit = async (ev) => {
        await ev.preventDefault();
        await this.props.createFile(this.state.link,this.props.folderId);
        this.hide();
    }

    render() {
        return (
            <div className="card mt-3">
                <form onSubmit={this.onSubmit}>
                    <div style={{padding:"0px 10px"}} className="row align-items-center">
                        <div className="col-lg-9 col-md-7">
                            <div className="card-item-input">
                                <input ref="input" onChange={this.onInputChange} value={this.state.link} className="input w-100" type="url" placeholder="Enter File URL" required />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="card-item-input">
                                <button type="submit" className="btn btn-blue w-100">Create</button>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-2">
                            <div className="card-item-input">
                                <button onClick={this.hide} className="btn btn-red w-100">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null,{ createFile })(createFil);
