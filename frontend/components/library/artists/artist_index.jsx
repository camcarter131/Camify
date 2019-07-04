import React from 'react';
import { Link } from 'react-router-dom';
import ArtistIndexItem from './artist_index_item';
import GridLoader from 'react-spinners/GridLoader';

class ArtistIndex extends React.Component { 

    componentDidMount() { 
        this.props.receiveAllArtists();
        this.props.receiveAllSongs();
        
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
        const artists = Object.values(this.props.artists).map(artist => {
            return (
                <ArtistIndexItem
                    key={artist.id}
                    artist={artist}
                />
            );
        });

        return (
            <div id='artist-index-div'>
                {artists}
            </div>
        );
    }
};

export default ArtistIndex;