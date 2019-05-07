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
                            <Link className="lib-link">PODCASTS</Link>
                        </div>
                    </li>
                    <li className="nav-li">
                        <div className="nav-li-div">
                            <Link className="lib-link">CHARTS</Link>
                        </div>
                    </li>
                    <li className="nav-li">
                        <div className="nav-li-div">
                            <Link className="lib-link">{"GENRES & MOODS"}</Link>
                        </div>
                    </li>
                    <li className="nav-li">
                        <div className="nav-li-div">
                            <Link className="lib-link">NEW RELEASES</Link>
                        </div>
                    </li>
                </div>
            </div>

            <div>
                This is Home. Will render different components here.
            </div>
            
        </div>
    )
}

export default Home;