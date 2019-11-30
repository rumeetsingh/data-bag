import React from 'react';
import { connect } from 'react-redux';
import { createFile } from '../../actions';


class createFil extends React.Component {

    state = { name: "", link: "" };

    componentDidMount() {
        this.refs.input.focus();
    }

    hide = () => {
        this.props.handle();
    }

    onInputNameChange = ev => {
        this.setState({ name: ev.target.value });
    }

    onInputLinkChange = ev => {
        this.setState({ link: ev.target.value });
    }

    onSubmit = async ev => {
        await ev.preventDefault();
        await this.props.createFile(this.state.name, this.state.link, this.props.folderId);
        this.hide();
    }

    render() {
        return (
            <div style={{ border: "1px solid #4fc4ff" }} className="card mt-3">
                <form onSubmit={this.onSubmit}>
                    <div style={{ padding: "0px 10px" }} className="row align-items-center">
                        <div className="col-lg-4 col-md-43">
                            <div className="card-item-input">
                                <input ref="input" onChange={this.onInputNameChange} value={this.state.name} className="input w-100" type="text" placeholder="Enter File Name" required />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="card-item-input">
                                <input onChange={this.onInputLinkChange} value={this.state.link} className="input w-100" type="url" placeholder="Enter File URL" required />
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-2">
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


export default connect(null, { createFile })(createFil);
