import React from 'react';
import { Link } from 'react-router-dom';


class ArtistIndexItem extends React.Component {

    render() {
        const { artist } = this.props;
        return (
            <div className="song-div">
                {artist.name}
            </div>
        ); 
    }
}

export default ArtistIndexItem; 