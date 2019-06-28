import React from 'react';
import { Link } from 'react-router-dom';
import AddSongModalContainer from '../add_song_modal/add_song_modal_container';
import ReactPlayer from 'react-player';

class SongIndexItem extends React.Component{ 

    constructor(props) {
        super(props); 
        this.state = {
            show: false,
            displayMenu: false,  
            play: false
        }; 
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // this.playPauseSong = this.playPauseSong.bind(this);

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

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    // playPauseSong() {
    //     return (
    //         (this.state.play === false) ? 
    //             this.setState({play: true})
    //         : 
    //             this.setState({ play: false })
    //     )
    // } 

    render() {
        const { song, playPauseSong, removeOneSong, isPlaying, currentSong, artist, album } = this.props;
        if (song === undefined) return null;
        // debugger
        let songNameId = "song-name";
        if (song.name === currentSong.name) songNameId = "song-name-green";
        return ( 
            <div className="song-div"> 
                {(this.state.show) ? <AddSongModalContainer song={song} show={this.state.show} handleClose={this.hideModal} />: null}
                <div className="song-div-inner">
                    <div className="song-play-btn">
                        <button className="song-play-btn" onClick={() => playPauseSong(song)}>
                            {(isPlaying === true && song.name === currentSong.name) ? (
                                <i className="fa fa-pause-circle fa-2x" aria-hidden="true"></i>
                            ) : (
                                    <i className="fa fa-play-circle fa-2x" aria-hidden="true"></i>
                                )
                            }
                        </button>
                    </div>
                    <div id="song-info">
                        <div id={songNameId}>
                            {song.name}
                        </div>
                        <div id="song-not-name">
                            <div id="song-artist">
                                <Link className="song-links" to={`/artists/${artist.id}`}>
                                    {artist.name}
                                </Link>
                            </div>
                            <div id="separator">
                                .
                            </div>
                            <div id="song-album">
                                <Link className="song-links" to={`/albums/${album.id}`}>
                                    {album.name}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="song-ellipses-div">
                        <button onClick={this.showDropdownMenu} className="song-ellipses">&hellip;</button>
                    </div>
                    
                    {this.state.displayMenu ? (
                        <div className="dropdown">
                            <a onClick={this.showModal} className="dropdown">Add to playlist</a>
                            <a onClick={() => removeOneSong(song.id)} className="dropdown">Remove from your library</a>
                        </div>
                    ) :
                        (null)
                    } 
                </div>

            </div>
        );
    }
}

export default SongIndexItem; 