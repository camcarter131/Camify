import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div id="splash-div">
            <div className="topnav">
                <div className="splash-logo">
                    <Link id="upper-left-logo" to="/"></Link>
                    <Link id="Camify-splash" to="/"> Camify</Link>
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
                    Dozens of songs. Listen to a few of them. 
                       
                </div>  
                <div id="splash-link">
                    <Link id="splash-button" to="/signup">GET CAMIFY NOW</Link>
                </div>
              
            </div>  

            <div id="splash-footer">
                {/* <div id="footer-camify-logo">
                    <div id="footer-img">
                        <Link id="bottom-left-logo" to="/">
                        </Link>
                    </div>
                    <div id="footer-camify">
                        <Link id="Camify-splash-footer" to="/"> Camify</Link>
                    </div>
                </div> */}
                <div id ="footer-icons">
                    
                    {/* <a className="footer-link" href="https://github.com/camcarter131/Camify" > */}
                    {/* </a> */}
                    <i id="github" className="devicon-github-plain"></i>
                   
                    {/* <i class="fab fa-github"></i> */}
                    <i id="linkedin" className="fab fa-linkedin-in">
                        {/* <a className = "footer-link" id="linkedin" href="https://www.linkedin.com/in/cameron-carter-34796398/" >
                        </a> */}
                    </i>
                    
                    
                </div>
            </div>    
        </div>
    )
}

export default Splash;