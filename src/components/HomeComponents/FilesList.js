import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

class FilesList extends React.Component {

    renderFilesList = () => {
        if (this.props.folders[this.props.folderId].files.length === 0) {
            return (
                <div className="col-md-3">
                    <div style={{ padding: "10px" }} className="mt-3">No Files Here!</div>
                </div>
            );
        }

        return this.props.folders[this.props.folderId].files.map(file => {
            return (
                <div key={file} className="col-md-3">
                    <a className="no-link-style" href={this.props.files[file].link} rel="noopener noreferrer" target="_blank">
                        <div className="card-folder no-select mt-3 cursor-pointer">
                            <div style={{ overflowWrap: "break-word" }} className="card-item-folder">
                                <FontAwesomeIcon icon={faFile} /> | {_.truncate(this.props.files[file].name, { length: 20 })}
                                <hr />
                                {_.truncate(this.props.files[file].link, { length: 50 })}
                            </div>
                        </div>
                    </a>
                </div>
            );
        })
    }

    render() {
        return (
            <div style={{ padding: "20px" }} className="card mt-3 mb-3">
                <div className="card-lg-header">
                    Files
                </div>
                <div className="row">
                    {this.renderFilesList()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    folders: state.folders,
    files: state.files,
})

export default connect(mapStateToProps, {})(FilesList);
