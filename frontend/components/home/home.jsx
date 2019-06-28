import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedSongIndexContainer from './featured/featured_song_index_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

// const Home = () => {

//     return ( 
//         <div id="home-main">
//             <div id='nav-button-container'>
//                 <div id="nav-div"> 
//                     <li className="nav-li">
//                         <div className="nav-li-div">
//                             <Link className="lib-link">FEATURED</Link>
//                         </div>
//                     </li>
//                     <li className="nav-li">
//                         <div className="nav-li-div">
//                             <Link className="lib-link">PLAYLISTS</Link>
//                         </div>
//                     </li>
//                     <li className="nav-li">
//                         <div className="nav-li-div">
//                             <Link to="/browse/tracks" className="lib-link">SONGS</Link>
//                         </div>
//                     </li>
//                     <li className="nav-li">
//                         <div className="nav-li-div">
//                             <Link className="lib-link">ALBUMS</Link>
//                         </div>
//                     </li>
//                     <li className="nav-li">
//                         <div className="nav-li-div">
//                             <Link className="lib-link">ARTISTS</Link>
//                         </div>
//                     </li> 
//                 </div>
//             </div>
//             <div className="search-result-section" id="songs">
//                 <h2 className="search-header">
//                     Made for James
//                 </h2>
//             </div>
//             <Switch>
//                 <ProtectedRoute exact path="/browse/tracks" component={FeaturedSongIndexContainer} />
//             </Switch>
//         </div>
//     )
// }

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    

    showHome(type) {
        let playlistClass = "lib-link";
        let songClass = "lib-link";
        let albumClass = "lib-link";
        let artistClass = "lib-link";
        (type === "playlists") ? playlistClass = "lib-link-clicked" : playlistClass = playlistClass;
        (type === "tracks") ? songClass = "lib-link-clicked" : songClass = songClass;
        (type === "albums") ? albumClass = "lib-link-clicked" : albumClass = albumClass;
        (type === "artists") ? artistClass = "lib-link-clicked" : artistClass = artistClass;
        return (
            <div id="home-main">
                <div id='nav-button-container'>
                    <div id="nav-div">
                        <li className="nav-li">

                            <div className="nav-li-div">
                                <Link to="/collection/playlists" className={playlistClass}>FEATURED</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/collection/artists" className={artistClass}>PLAYLISTS</Link>
                            </div>
                        </li>
                        <li className="nav-li">
                            <div className="nav-li-div">
                                <Link to="/browse/tracks" className={songClass}>SONGS</Link>
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
                </div>
                <div className="search-result-section" id="songs">
                    <h2 className="search-header">
                        Made for James
                    </h2>
                </div>

                
                <Switch>
                    {/* <ProtectedRoute exact path="/collection/playlists" component={PlaylistIndexContainer} /> */}
                    <ProtectedRoute exact path="/browse/tracks" component={FeaturedSongIndexContainer} />
                    {/* <ProtectedRoute exact path="/collection/artists" component={ArtistIndexContainer} />
                    <ProtectedRoute exact path="/collection/albums" component={AlbumIndexContainer} /> */}
                </Switch>
            </div>
        )

    }

    render() {
        const { type } = this.props;
        debugger
        return (
            this.showHome(type)
        )
    }
}

export default Home;