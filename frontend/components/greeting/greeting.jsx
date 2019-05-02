import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
        return(
            <div className="main-greeting-div">
                <header className="main-header">
                    <h1 className="Camify">Camify</h1>
                    <Link className="logo" to="/"></Link>
                </header>
                <h2 className="welcome">Welcome {currentUser.displayed_name}!</h2>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div className="header-div">
                <div className="header-sub-div" id="camify-logo-link">
                    <div id="header-sub-sub-div">
                        <Link id="login-logo" to="/"></Link><Link id="Camify" to="/">Camify</Link>
                    </div>
                </div>
                <div className="header-sub-div">
                    <Link className="login-signup-link" to="/signup">Signup</Link>
                </div>
                <div className="header-sub-div">
                    <Link className="login-signup-link" to="/login">Login</Link>
                </div>
                <div className="header-sub-div">
                    <Link className="login-signup-link" to="/login">Demo</Link>
                </div>
            </div>
        )
    }
}

export default Greeting;