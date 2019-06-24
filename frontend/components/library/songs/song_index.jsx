import React from 'react';
import SongIndexItem from './song_index_item';
import GridLoader from 'react-spinners/GridLoader';

class SongIndex extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.receiveAllSongs();
    }

    render() {
        const { playPauseSong, removeOneSong, loading, isPlaying, currentSong } = this.props;
        if (loading) return (
            <div id="loader-songs">
                <GridLoader id="beatloader"
                    color={'#DFE2E1'} 
                    loading={loading} /> 
            </div>
        ); 
        const songs = this.props.songs.map(song => { 
            return (
                <SongIndexItem
                    key={song.id}
                    song={song}
                    artist={song.artist}
                    album={song.album}
                    playPauseSong={playPauseSong}
                    removeOneSong={removeOneSong}
                    isPlaying={isPlaying}
                    currentSong={currentSong}
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