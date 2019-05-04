import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {

    render() {
        const { user, logout } = this.props;
        return (
            <div id="side-nav">
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
                    <div className="side-nav-link" id="logout" >
                        <Link to="/login" onClick={logout}>Logout</Link>
                    </div>
                    <div className="side-nav-link" id="avatar" >
                        <span>{user.displayed_name}</span>
                        <a href="#">Avatar</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default SideNav;