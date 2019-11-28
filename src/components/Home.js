import React from 'react';
import CreateFile from './HomeComponents/CreateFile';
import CreateFolder from './HomeComponents/CreateFolder';


class Home extends React.Component{

    state = { createNew:null, };

    hideCreate = () => {
        this.setState({createNew:null})
    }

    createFolderHandler = () => {
        this.setState({createNew:"folder"});
    }

    createFileHandler = () => {
        this.setState({createNew:"file"});
    }

    createInputRender = () => {
        if (this.state.createNew==="folder"){
            return <CreateFolder folderId={this.props.match.params.folderId} handle={() => this.hideCreate()} />;
        }else if(this.state.createNew==="file"){
            return <CreateFile handle={() => this.hideCreate()} />
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="card mt-3">
                        <div className="card-item">
                            <button onClick={this.createFileHandler} className="btn btn-blue w-100">New File</button>
                        </div>
                        <div className="card-item">
                            <button onClick={this.createFolderHandler} className="btn btn-red w-100">New Folder</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    {this.createInputRender()}
                </div>
            </div>
        );
    }
}


export default Home;