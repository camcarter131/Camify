import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
        return(
            <div className="main-greeting-div">
                <header className="main-header">
                    <h1 className="Camify">Camify</h1>
                    <Link className="logo" to="/"><img src="../../../assets/images/spotify_logo.jpg" />
                    </Link>
                </header>
                <h2 className="welcome">Welcome {currentUser.displayed_name}!</h2>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <header className="main-header">
                    <h1 className="Camify">Camify</h1>
                    <div className="logo-div">   
                        <Link className="logo" to="/">logo
                        </Link>
                    </div>
                </header>
                <Link className="login-signup-link" to="/signup">Signup</Link>
                <br/>
                <Link className="login-signup-link" to="/login">Login</Link>
            </div>
        )
    }
}

export default Greeting;