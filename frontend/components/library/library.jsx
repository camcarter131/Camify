import React from 'react';
import { Link } from 'react-router-dom';
import Songs from './songs/songs';
import SongsContainer from './songs/songs_container';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistModal from './playlist_modal/playlist_modal'
import PlaylistModalContainer from './playlist_modal/playlist_modal_container'

class Library extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
        this.hidePlaylistModal = this.hidePlaylistModal.bind(this);
        this.showPlaylistModal = this.showPlaylistModal.bind(this);
    }

    showPlaylistModal() {
        this.setState({ show: true });
    }

    hidePlaylistModal() {
        this.setState({ show: false });
    }

    playlists() {
        return (
            <div id="library-main">
                <PlaylistModalContainer show={this.state.show} handleClose={this.hidePlaylistModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </PlaylistModalContainer>
                <div id='nav-button-container'>
                    <div id="nav-div">
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link className="lib-link">PLAYLISTS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link className="lib-link">SONGS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link className="lib-link">ALBUMS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link className="lib-link">ARTISTS</Link>
                            </div>
                        </li>
                    </div>
                    <div id="new-playlist-btn-div">
                        <button id="new-playlist-btn" onClick={this.showPlaylistModal}>NEW PLAYLIST</button>
                    </div>
                </div>
                <PlaylistsContainer />
            </div>
        )

    }

    render() { 
        return(
            this.playlists()
        )
    }
}

export default Library;