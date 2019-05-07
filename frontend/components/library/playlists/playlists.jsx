import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from './playlist';

class Playlists extends React.Component {

    componentWillMount() { 
        this.props.receiveAllPlaylists();
    }

    render() {
        
        const playlists = this.props.playlists.map(playlist => {
            return ( 
                <Playlist
                    key={playlist.id}
                    playlist={playlist}
                    remove={this.props.remove}
                    name={this.props.name}
                />
            );
        });

        return (
            <div id='playlist-div'>
                {playlists}
            </div>
        );
    }
};

export default Playlists;