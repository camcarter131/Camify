import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';
import GridLoader from 'react-spinners/GridLoader';

class PlaylistIndex extends React.Component {

    componentWillMount() { 
        this.props.receiveAllPlaylists();
    }

    render() {
        const { loading } = this.props;
        if (loading) return (
            <div id="loader-songs">
                <GridLoader id="beatloader"
                    color={'#DFE2E1'}
                    loading={loading} />
            </div>
        );
        
        const playlists = this.props.playlists.map(playlist => {
            return ( 
                <PlaylistIndexItem
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

export default PlaylistIndex;