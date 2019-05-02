import React from 'react';
import { Link } from 'react-router-dom';

//rgba (4 arguments)
// webkit radial gradient


//https://www.scdn.co/i/home/hero-burst.svg


const Splash = () => {

    return (
        <div id="splash-div">
            <div className="topnav">
                <a href="#">Premium</a>
                <a href="#">Help</a>
                <a href="#">Download</a>
                <a href="#">Sign up</a>
                <a href="#">Log In</a>
            </div>
            <div id="splash-lower">
                <div id="big-text">
                    Music for everyone.
                </div>
                <div id="small-text">
                    Millions of songs. No credit card needed.
                       
                </div>  
                <div id="splash-link">
                    <Link id="splash-button" to="/signup">GET SPOTIFY FREE</Link>
                </div>
              
            </div>      
        </div>
    )
}

export default Splash;