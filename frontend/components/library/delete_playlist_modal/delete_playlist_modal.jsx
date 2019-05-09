import React from 'react';

class DeletePlaylistModal extends React.Component {
    constructor(props) {
        super(props) 
        this.handleDelete = this.handleDelete.bind(this);
    } 

    handleDelete(e) {
        e.preventDefault();
        this.props.remove(this.props.playlist.id).then(() => {
            this.props.history.push("/")
        })
    }

    render() {
        const { remove, playlist, show, handleClose } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <div className="modal-close">
                    <button className="modal-close-button" onClick={handleClose}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff"></path>
                        </svg>
                    </button>
                </div>
                <div className="modal-header">
                    <h1>Do you really want to delete this playlist?</h1>
                </div>
                <div className="modal-buttons">
                    <button id="cancel-playlist-btn" onClick={handleClose}>CANCEL</button>
                    <button id="create-playlist-btn"
                        onClick={this.handleDelete} >DELETE</button>
                </div>
            </div>
        );
    }
};

export default DeletePlaylistModal; 