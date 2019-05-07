import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistInModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // const { song, playlist } = this.props;
        // debugger
        e.preventDefault();
        this.props.addSongToPlaylist({ playlist_id: this.props.playlist.id, song_id: this.props.song.id }).then(() => {
            this.props.history.push("/")
        })
    }

    render() {
        const { playlist, name } = this.props;
        return (
            <div className="playlist-modal-div">
                <button onClick={this.handleSubmit} className="playlist-modal-btn">
                    <svg id="playlist-modal-icon" width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd">
                        </path>
                    </svg>
                </button>
                <Link className="playlist-modal-link" id="playlist-modal-name-link" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            </div>
        );
    };
}

export default PlaylistInModal; 