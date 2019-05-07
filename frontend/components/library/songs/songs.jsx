import React from 'react';
import { Link } from 'react-router-dom';
import Song from './song';

class Songs extends React.Component { 
    
    componentDidMount() {
        this.props.receiveAllSongs();
    }

    render() {
        const songs = this.props.songs.map(song => {
            return (
                <Song
                    key={song.id}
                    song={song}
                 />
            );
        });

        return (
            <div id='song-list-div'>
                {songs}
            </div>
        );
    }
};

export default Songs;