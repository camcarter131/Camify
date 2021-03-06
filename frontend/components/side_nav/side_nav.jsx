import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {

    render() {
        
        const { user, logout, whichTab } = this.props;
        let homeClass = "side-nav-link";
        let searchClass = "side-nav-link";
        let libraryClass = "side-nav-link";
        (whichTab === "home") ? homeClass = "side-nav-link-clicked" : homeClass = homeClass;
        (whichTab === "search") ? searchClass = "side-nav-link-clicked" : searchClass = searchClass;
        (whichTab === "library") ? libraryClass = "side-nav-link-clicked" : libraryClass = libraryClass;
        if (user) {
            return (
                <div id="side-nav"> 
                    <div id="side-nav-top">
                        <div className="side-nav-header">
                            <Link id="login-logo-logged-in" to="/"></Link><Link id="Camify-logged-in" to="/"> Camify</Link>
                        </div>
                        <div className="side-nav-menu">
                            <div className={homeClass} id="home">
                                <svg className="icon-img" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor">
                                    </path>
                                </svg> 
                                <Link to="/browse/featured">Home</Link>
                            </div>
                            <div className={searchClass} id="search">
                                <svg className="icon-img" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd">
                                    </path>
                                </svg>
                                <Link to="/search">Search</Link>
                            </div>
                            <div className={libraryClass} id="library" >
                                <svg className="icon-img" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z" fill="currentColor">
                                    </path>
                                </svg>
                                <Link to="/collection/playlists">Your Library</Link>
                            </div>
                        </div>
                        <div id="recently-played">
                            <div id="recently-played-header">
                                ABOUT THE AUTHOR
                        </div>
                            <div className='recently-played-item'>
                                <div className='recently-played-type'>
                                    <a href="https://github.com/camcarter131/Camify" className="info-link">
                                        GITHUB
                                    </a>
                                </div>
                            </div>
                            <div className='recently-played-item'>
                                
                                <div className='recently-played-type'>
                                    <a href="https://linkedin.com/in/cameron-carter-34796398/" className="info-link">
                                    LINKEDIN
                                    </a>
                                </div>
                            </div>
                            <div className='recently-played-item'>
                                {/* <div className="ellipsis-one-line">
                                    <a href="https://cameroncarter.io" className="info-link">
                                        PORTFOLIO
                                    </a>
                                </div> */}
                                <div className='recently-played-type'>
                                    <a href="https://cameroncarter.io" className="info-link">
                                        PORTFOLIO
                                    </a>
                                </div>
                            </div>
                            <div className='recently-played-item'>
                                <div className='recently-played-type'>
                                    <a href="https://angel.co/cameron-carter-5?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar" className="info-link">
                                        ANGELLIST
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="side-nav-bottom">
                        <div id="logout-div">
                            <Link to="/login" onClick={logout}>Logout</Link>
                        </div>
                        <div id="avatar-div">
                            <div id="user-photo"><img id="user-photo" src={user.photoUrl}></img>&nbsp;</div>
                            <div id="user-name">
                                {user.displayed_name}
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
        } else {
            return null;
        }
    }
}


export default SideNav;