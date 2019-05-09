import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component { 
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
                <SongIndexItem
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

export default SongIndex;