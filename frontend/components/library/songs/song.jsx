import React from 'react';
import { Link } from 'react-router-dom';
import AddSongModalContainer from '../add_song_modal/add_song_modal_container';


class Song extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

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

    render() {
        const { song } = this.props;
        return (
            <div className="song-div">
                <AddSongModalContainer song={song} show={this.state.show} handleClose={this.hideModal}/>
                {song.name}
                <button onClick={this.showDropdownMenu} className="song-ellipses">&hellip;</button>
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

export default Song; 