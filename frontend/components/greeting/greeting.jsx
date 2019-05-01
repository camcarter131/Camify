import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
        return(
            <div>
                <h2>Welcome {currentUser.displayed_name}!</h2>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link className="login-signup-link" to="/signup">Signup</Link>
                <br/>
                <Link className="login-signup-link" to="/login">Login</Link>
            </div>
        )
    }
}

export default Greeting;