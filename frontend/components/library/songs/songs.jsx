import React from 'react';
import { Link } from 'react-router-dom';
import Song from './song';

class Songs extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.receiveAllSongs();
    }
 

    render() {
        const { playSong } = this.props;
        const songs = this.props.songs.map(song => {
            return (
                <Song
                    key={song.id}
                    song={song}
                    playSong={playSong}
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