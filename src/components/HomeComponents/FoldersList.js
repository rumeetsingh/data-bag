import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


class FoldersList extends React.Component {

    renderFoldersList = () => {

        if (this.props.folders[this.props.folderId].folders.length === 0) {
            return (
                <div className="col-md-3">
                    <div style={{ padding: "10px" }} className="mt-3">No Folders Here!</div>
                </div>
            );
        }

        return this.props.folders[this.props.folderId].folders.map(fol => {
            return (
                <div key={fol} className="col-md-3">
                    <Link className="no-link-style" to={"/" + fol}>
                        <div className="card-folder no-select mt-3 cursor-pointer">
                            <div className="card-item-folder">
                                <FontAwesomeIcon icon={faFolder} /> | {_.truncate(this.props.folders[fol].name, { length: 20 })}
                            </div>
                        </div>
                    </Link>
                </div>
            );
        })
    }

    render() {
        return (
            <div style={{ padding: "20px" }} className="card mt-3">
                <div className="card-lg-header">
                    Folders
                </div>
                <div className="row">
                    {this.renderFoldersList()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    folders: state.folders,
})

export default connect(mapStateToProps, {})(FoldersList);
