import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import history from './../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import CreateFile from './HomeComponents/CreateFile';
import CreateFolder from './HomeComponents/CreateFolder';
import FoldersList from './HomeComponents/FoldersList';
import Bread from './HomeComponents/Bread';


class Home extends React.Component{

    state = { ready:false,createNew:null };

    componentDidMount = () => {
        if (_.has(this.props.folders,this.props.match.params.folderId)){
            this.setState({ready:true});
        }else{
            history.push('/home');
            this.setState({ready:true});
        }
    }

    renderBread = () => {
        if(!this.state.ready){
            return null;
        }

        let parent = this.props.folders[this.props.match.params.folderId].parentFolder;
        let bread = [this.props.match.params.folderId,];

        while (parent!=null){
            bread.unshift(parent);
            parent = this.props.folders[parent].parentFolder;
        }

        return <Bread folders={this.props.folders} data={bread} />;
    }

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

    renderBackButton = () => {
        if (this.props.folders[this.props.match.params.folderId].parentFolder!==null){
            return (
                <div className="card-item">
                    <Link to={"/" + this.props.folders[this.props.match.params.folderId].parentFolder} className="no-link-style">
                        <button className="btn btn-blue w-100"><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        if(!this.state.ready){
            return null;
        }
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="card mt-3">
                        {this.renderBackButton()}
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
                    {this.renderBread()}
                    <FoldersList folderId={this.props.match.params.folderId} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        folders : state.folders,
    }
}

export default connect(mapStateToProps,{})(Home);