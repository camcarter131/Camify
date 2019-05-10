import React from 'react';

class PlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        );
    } 

    handleSubmit(e) {
        e.preventDefault();
        this.props.create({ name: this.state.playlistName, user_id: this.props.currentUserId })
        .then(() => {this.props.history.push("/")})
    }
    
    render() {
        const { handleClose, show } = this.props;
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
                    <h1>Create new playlist</h1>
                </div>
                <div className="modal-main">
                    <div className="input-box">
                        <div className='content-spacing'>
                            <div className="input-box-label">Playlist Name</div>
                            <input className='create-playlist-input' placeholder="Start typing..." 
                            type="text" onChange={this.update("playlistName")}/>
                        </div>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button id="cancel-playlist-btn" onClick={handleClose}>CANCEL</button>
                    <button id="create-playlist-btn" 
                    onClick={this.handleSubmit} >CREATE</button>
                </div>
            </div>
        );
    }
};

export default PlaylistModal; 