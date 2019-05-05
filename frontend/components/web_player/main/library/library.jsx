import React from 'react';
import { Link } from 'react-router-dom';
import Songs from './songs/songs';
import SongsContainer from './songs/songs_container';

class Library extends React.Component {

    render() { 

        return ( 
            <div id="library-main">
                <div id='nav-button-container'>
                        <div id="nav-div">
                            <li className ="nav-li">
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
                        <Link id="new-playlist-btn" to="#">NEW PLAYLIST</Link>
                    </div>
                </div>  
                <SongsContainer/>
            </div>
        )
    }
}

export default Library;