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
        this.playPauseSong = this.playPauseSong.bind(this);

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

    playPauseSong() {
        // debugger
        return (
            (this.state.play === false) ? 
                this.setState({play: true})
            : 
                this.setState({ play: false })
        )
    

    }

    render() {
        const { song, playSong } = this.props;
        return (
            <div className="song-div">
                {(this.state.show) ? <AddSongModalContainer song={song} show={this.state.show} handleClose={this.hideModal} />: null}
                
                <button className="song-play-btn" onClick={() => playSong(song)}></button>     
                <div id="song-name">   
                    {song.name}
                </div>          
                <div id="song-ellipses-div">
                    <button onClick={this.showDropdownMenu} className="song-ellipses">&hellip;</button>
                </div>
                {this.state.displayMenu ? (
                    <div className="dropdown">
                        <a onClick={this.showModal} className="dropdown">Add to playlist</a>
                        <a className="dropdown">Remove from your library</a>
                    </div>
                ) :
                    (null)
                } 
            </div>
        );
    }
}

export default SongIndexItem; 