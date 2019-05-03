import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user, logout }) => {

    return (
        <div id="splash-div">
            <div className="topnav">
                <div className="splash-logo"></div>
                <div id="topnav-link">
                    <a href="#">FEATURED</a>
                </div>
                <div id="topnav-link">
                    <a href="#">PODCASTS</a>
                </div>
                <div id="topnav-link">
                    <a href="#">{"GENRES & MOODS"}</a>
                </div>
                <div id="topnav-link" className="last" >
                    <Link onClick={logout}>LOGOUT</Link>
                </div>
            </div>

            <div id="splash-lower">
                <div id="big-text">
                    Welcome {`${user.displayed_name}`}.
                </div>
                <div id="small-text">
                    Wanna play a game?
                </div>
                <div id="splash-link">
                    <Link id="splash-button" to="/signup">PLAYBAR</Link>
                </div>

            </div>
        </div>
    )
}

export default Home;