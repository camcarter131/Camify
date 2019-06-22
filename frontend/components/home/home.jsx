import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return ( 
        <div id="home-main">
            <div id='nav-button-container'>
                <div id="nav-div"> 
                    <li className="nav-li">
                        <div className="nav-li-div">
                            <Link className="lib-link">FEATURED</Link>
                        </div>
                    </li>
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
            </div>
            <div className="search-result-section" id="songs">
                <h2 className="search-header">
                    Made for James
                </h2>
            </div>
        </div>
    )
}

export default Home;