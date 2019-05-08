import React from 'react';
import DeletePlaylistModalContainer from '../delete_playlist_modal/delete_playlist_modal_container';
import Playlists from './playlists';
import PlaylistSongs from './playlist_songs';

class PlaylistShow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
            show: false
        };
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    };

    componentDidMount() {
        this.props.receivePlaylist(this.props.playlistId)
        // this.props.receiveAllPlaylistSongs();
        // debugger
    } 

    showDropdownMenu(e) {
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    showDeleteModal() {
        this.setState({ show: true });
    }

    hideDeleteModal() {
        this.setState({ show: false });
    }
 
    render() {
        // debugger
        const { songs, playlist, name, remove } = this.props;
        if (songs === undefined) return null;
        if (playlist === undefined) return null;
        // console.log(this.props);
        // debugger
        return (
            <div id='playlist-show'>
                <DeletePlaylistModalContainer handleClose={this.hideDeleteModal} playlist={playlist} remove={remove} show={this.state.show} />
                <div id="playlist-header-all">
                    <div id='playlist-show-header-btn'>
                        <button className="playlist-btn-show">
                            <svg id="playlist-icon" width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fillRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div id='playlist-show-header'>
                        <div id="playlist-name">
                            {playlist.name}
                        </div>
                        <div id="playlist-author">
                            <span id='by'>By&nbsp;</span><span id='author'>{name}</span>
                        </div>
                        <div id='playlist-show-info'>
                            <span>0 SONGS</span>
                        </div>
                        <div id='playlist-show-buttons'>
                            <button id="playlist-play-btn">PLAY</button>
                            <div className="dropdown">
                                <button onClick={this.showDropdownMenu}className="ellipses">&hellip;</button>
                                    {this.state.displayMenu ? (
                                        <div className="dropdown">
                                        <a onClick={this.showDeleteModal} className="dropdown">Delete</a>
                                            <a className="dropdown">Make secret</a>
                                            <a className="dropdown">Start Radio</a>
                                        </div>
                                    ) : 
                                    (null)
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>       
                <PlaylistSongs songs={songs}/>
            </div>
        )
    }
}

export default PlaylistShow;