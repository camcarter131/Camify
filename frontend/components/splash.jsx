import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div id="splash-div">
            <div className="topnav">
                <div className="splash-logo">
                    <Link id="upper-left-logo" to="/"></Link>
                </div>
                <div id="topnav-link">
                    <Link to="/signup">Sign up</Link>
                </div>
                <div id="topnav-link" className="last" >
                    <Link to="/login">Log In</Link>
                </div>
            </div>
                    
            <div id="splash-lower">
                <div id="big-text">
                    Music for some.
                </div>
                <div id="small-text">
                    Dozens of songs. Then maybe a couple more songs.
                       
                </div>  
                <div id="splash-link">
                    <Link id="splash-button" to="/signup">GET CAMIFY NOW</Link>
                </div>
              
            </div>      
        </div>
    )
}

export default Splash;