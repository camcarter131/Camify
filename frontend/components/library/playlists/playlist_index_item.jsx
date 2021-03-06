import React from 'react';
import { Link } from 'react-router-dom';
 
class PlaylistIndexItem extends React.Component {  

    render() {
        const { playlist, remove, name } = this.props;
        return ( 
            <div className="playlist-div">
                <button className="playlist-btn">
                    <Link to={`/playlists/${playlist.id}`} className="playlist-pic-link">
                        <svg id="playlist-icon" width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd">
                            </path>
                        </svg>
                        {/* <img id="album-photo" src={albumPhoto}></img> */}
                    </Link> 
                </button>
    
                <Link className="playlist-link" id="playlist-name-link" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
                <Link className="playlist-link" id="user-name-link" to="#">{name}</Link>
            </div>
        ); 
    }

};

export default PlaylistIndexItem; 