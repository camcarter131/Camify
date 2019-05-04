import React from 'react';
import { Link } from 'react-router-dom';

const Library = () => {

    return (
        <div id="library-main">
            <div id='nav-button-container'>
                <nav id="lib-nav">
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
                </nav>
                <div id="new-playlist-btn-div">
                    <Link id="new-playlist-btn" to="#">NEW PLAYLIST</Link>
                </div>
            </div>

            <div>
                This is your Library. Will render different components here.
            </div>
        </div>
    )
}

export default Library;