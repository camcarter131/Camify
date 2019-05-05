import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {

    render() {
        const { user, logout } = this.props;
        return (
            <div id="side-nav"> 
                <div className="side-nav-header">
                    <Link id="login-logo-logged-in" to="/"></Link><Link id="Camify-logged-in" to="/"> Camify</Link>
                </div>
                <div className="side-nav-menu">
                    <div className="side-nav-link" id="home">
                        <a href="#">Home</a>
                    </div>
                    <div className="side-nav-link" id="search">
                        <a href="#">Search</a>
                    </div>
                    <div className="side-nav-link" id="library" >
                        <Link to="/collections/tracks">Your Library</Link>
                    </div>
                </div>
                <div id="logout-div">
                    <Link to="/login" onClick={logout}>Logout</Link>
                </div>
                <div id="avatar-div">
                    <div>Avatar&nbsp;</div>
                    <span>{user.displayed_name}</span>
                </div>
            </div>
        );
    }
}


export default SideNav;