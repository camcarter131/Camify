import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexContainer from './songs/song_index_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
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

    showLibrary(type) {
        let playlistClass = "lib-link"; 
        let songClass = "lib-link";
        let albumClass = "lib-link";
        let artistClass = "lib-link"; 
        (type === "playlists") ? playlistClass = "lib-link-clicked" : playlistClass = playlistClass;
        (type === "tracks") ? songClass = "lib-link-clicked" : songClass = songClass;
        (type === "albums") ? albumClass = "lib-link-clicked" : albumClass = albumClass;
        (type === "artists") ? artistClass = "lib-link-clicked" : artistClass = artistClass;
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
                            <Link to="/collection/playlists" className={playlistClass}>PLAYLISTS</Link>
                            </div>
                        </li> 
                        <li className="nav-li">
                            <div className="nav-li-div"> 
                                <Link to="/collection/tracks" className={songClass}>SONGS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/collection/albums" className={albumClass}>ALBUMS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/collection/artists" className={artistClass}>ARTISTS</Link>
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
                    <ProtectedRoute exact path="/collection/playlists" component={PlaylistIndexContainer} />
                    <ProtectedRoute exact path="/collection/tracks" component={SongIndexContainer} />
                    <ProtectedRoute exact path="/collection/artists" component={ArtistIndexContainer} />
                    <ProtectedRoute exact path="/collection/albums" component={AlbumIndexContainer} />
                </Switch>
            </div>
        )

    }

    render() { 
        const {type} = this.props;
        return(
            this.showLibrary(type)
        )
    }
}

export default Library;