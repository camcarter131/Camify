import React from 'react';
import { Link } from 'react-router-dom';

//rgba (4 arguments)
// webkit radial gradient


//https://www.scdn.co/i/home/hero-burst.svg


const Splash = () => {
    return (
        <div>
            <div className="topnav">
                <a className="active" href="#">Premium</a>
                <a href="#">Help</a>
                <a href="#">Download</a>
                <a href="#">Sign up</a>
                <a href="#">Log In</a>
            </div>
            <div id="splash-div">
                <h1>Music for everyone</h1> 
                <h5>Millions of songs. No credit card needed.</h5>
                    {/* <Link to="/signup">Login</Link> */}
    
                <input id="splash-button" type="submit" value="GET SPOTIFY FREE" />

            </div>      
        </div>
    )
}

export default Splash;