import React from 'react';
import { Link } from 'react-router-dom';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {

    componentDidMount() {
        this.props.receiveAllArtists();
    }


    render() {
        const artists = Object.values(this.props.artists).map(artist => {
            return (
                <ArtistIndexItem
                    key={artist.id}
                    artist={artist}
                />
            );
        });

        return (
            <div id='song-list-div'>
                {artists}
            </div>
        );
    }
};

export default ArtistIndex;