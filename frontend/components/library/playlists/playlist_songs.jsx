import React from 'react';
import PlaylistSong from './playlist_song';

class PlaylistSongs extends React.Component {

    render() {
        const songs = Object.values(this.props.songs).map(song => {
            return (
                <PlaylistSong song={song} ></PlaylistSong>
            )
        });
        return (
            <div>
                {songs}
            </div>
        );
    }
}

export default PlaylistSongs;