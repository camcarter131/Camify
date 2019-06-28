import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedSongIndexContainer from './featured/featured_song_index_container';
import FeaturedAlbumIndexContainer from './featured/featured_album_index_container';
import FeaturedArtistIndexContainer from './featured/featured_artist_index_container';
import FeaturedPlaylistIndexContainer from './featured/featured_playlist_index_container';
import FeaturedContainer from './featured/featured_container';

import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    showHome(kind) {
        let featuredClass = "lib-link";
        let playlistClass = "lib-link";
        let songClass = "lib-link";
        let albumClass = "lib-link";
        let artistClass = "lib-link";
        (kind === "featured") ? featuredClass = "lib-link-clicked" : featuredClass = featuredClass;
        (kind === "playlists") ? playlistClass = "lib-link-clicked" : playlistClass = playlistClass;
        (kind === "tracks") ? songClass = "lib-link-clicked" : songClass = songClass;
        (kind === "albums") ? albumClass = "lib-link-clicked" : albumClass = albumClass;
        (kind === "artists") ? artistClass = "lib-link-clicked" : artistClass = artistClass;
        return (
            <div id="home-main">
                <div id='nav-button-container'>
                    <div id="nav-div">
                        <li className="nav-li">

                            <div className="nav-li-div">
                                <Link to="/browse/featured" className={featuredClass}>FEATURED</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/browse/playlists" className={playlistClass}>PLAYLISTS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/browse/tracks" className={songClass}>SONGS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/browse/albums" className={albumClass}>ALBUMS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/browse/artists" className={artistClass}>ARTISTS</Link>
                            </div>
                        </li>
                       
                    </div>
                </div>
                <div className="home-content-spacing" >
                </div>
                <div className="search-result-section" id="songs">
                    <h2 className="search-header">
                        Made for James
                    </h2>
                </div>
                <div className="home-content-spacing" id="spacing-bottom" >
                </div>
                
                <Switch>
                    {/* <ProtectedRoute exact path="/collection/playlists" component={PlaylistIndexContainer} /> */}
                    <ProtectedRoute exact path="/browse/featured" component={FeaturedContainer} />
                    <ProtectedRoute exact path="/browse/tracks" component={FeaturedSongIndexContainer} />
                    <ProtectedRoute exact path="/browse/artists" component={FeaturedArtistIndexContainer} /> 
                    <ProtectedRoute exact path="/browse/albums" component={FeaturedAlbumIndexContainer} /> */}
                </Switch>
            </div>
        )

    }

    render() {
        // debugger
        // const { kind } = this.props;
        let kind = this.props.match.params.kind;
        return (
            this.showHome(kind)
        )
    }
}

export default Home;