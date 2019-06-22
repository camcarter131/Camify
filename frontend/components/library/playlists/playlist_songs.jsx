import React from 'react';
import PlaylistSong from './playlist_song';
import SongIndexItem from '../songs/song_index_item';

class PlaylistSongs extends React.Component {

    render() {

        const songs = Object.values(this.props.songs).map(song => {
            // debugger
            return (
                // <PlaylistSong song={song} ></PlaylistSong>
                <SongIndexItem
                    key={song.id}
                    song={song}
                    artist={song.artist}
                    album={song.album}
                    playPauseSong={this.props.playPauseSong}
                />
            )
        });
        return (
            <div id="playlist-songs-div">
                {songs}
            </div>
        );
    }
}

export default PlaylistSongs;