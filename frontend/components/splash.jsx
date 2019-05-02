import React from 'react';
import { Link } from 'react-router-dom';

//rgba (4 arguments)
// webkit radial gradient


//https://www.scdn.co/i/home/hero-burst.svg


const Splash = () => {

    return (
        <div id="splash-div">
            <div className="topnav">
                <div className="splash-logo"></div>
                <div id="topnav-link">
                    <a href="#">Premium</a> 
                </div>
                <div id="topnav-link">
                    <a href="#">Help</a>
                </div>
                <div id="topnav-link">
                    <a href="#">Download</a>
                </div>
                <div id="topnav-link">
                    <a href="#">Sign up</a>
                </div>
                <div id="topnav-link" className="last" >
                    <a href="#">Log In</a>
                </div>
            </div>
                 
                
                
            <div id="splash-lower">
                <div id="big-text">
                    Music.
                </div>
                <div id="small-text">
                    Dozens of songs. Then maybe a couple more songs.
                       
                </div>  
                <div id="splash-link">
                    <Link id="splash-button" to="/signup">GET CAMIFIED NOW</Link>
                </div>
              
            </div>      
        </div>
    )
}

export default Splash;