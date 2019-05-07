import React from 'react';

class PlaylistShow extends React.Component {

    componentDidMount() {
        this.props.receivePlaylist(this.props.playlistId)
        // debugger
    }

    render() {
        const { playlist, name } = this.props;
        console.log(playlist);
        if (playlist === undefined) return null;
        return (
            <div id='playlist-show'>
                <div id='playlist-show-header'>
                    {playlist.name} &nbsp;
                    {name}
                </div>
                <div id="playlist-songs">
                    songs
                </div>
            </div>
        )
    }
}

export default PlaylistShow;