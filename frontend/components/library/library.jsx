import React from 'react';
import { Link } from 'react-router-dom';
import SongsContainer from './songs/songs_container';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistModalContainer from './playlist_modal/playlist_modal_container'
import ArtistIndexContainer from './artists/artist_index_container';
import AlbumIndexContainer from './albums/album_index_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

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
                                <Link to="/collection/playlists" className="lib-link">PLAYLISTS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div"> 
                                <Link to="/collection/tracks" className="lib-link">SONGS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/collection/albums" className="lib-link">ALBUMS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/collection/artists" className="lib-link">ARTISTS</Link>
                            </div>
                        </li>
                    </div>
                    <div id="new-playlist-btn-div">
                        <button id="new-playlist-btn" onClick={this.showPlaylistModal}>NEW PLAYLIST</button>
                    </div>
                </div>
                <div id="lib-spacing">
                    
                </div>
                <Switch>
                    <ProtectedRoute exact path="/collection/playlists" component={PlaylistsContainer} />
                    <ProtectedRoute exact path="/collection/tracks" component={SongsContainer} />
                    <ProtectedRoute exact path="/collection/artists" component={ArtistIndexContainer} />
                    <ProtectedRoute exact path="/collection/albums" component={AlbumIndexContainer} />
                </Switch>
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