import React from 'react';
import { Link } from 'react-router-dom';


class PlaylistSong extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            displayMenu: false,
        };

    }

    render() {
        const { song } = this.props;
        return (
            <div className="song-div">
                {song.name}
                {/* <button onClick={this.showDropdownMenu} className="song-ellipses">&hellip;</button>
                {this.state.displayMenu ? (
                    <div className="dropdown">
                        <a onClick={this.showModal} className="dropdown">Add to playlist</a>
                        <a className="dropdown">Remove from your library</a>
                    </div>
                ) :
                    (null)
                } */}
            </div>
        );
    }
}

export default PlaylistSong; 