import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {

    componentDidMount() {
        let artistId = this.props.match.params.id
        this.props.receiveOneArtist(artistId);
    }
 

    render() {
        const { artist } = this.props;

        if (artist === undefined) return null;
        return ( 
            <div className="artist-show-div">
                <div className="artist-header" id={`${artist.name[0]}`}>
                    <div id="artist-photo-div">
                        {/* <img id="artist-show-photo" src={artist.photoUrl}></img> */}
                    </div>
                    <div id="artist-name"> 
                        {artist.name} 
                    </div>
                </div>
                <div className="artist-show-body">
                    Albums
                </div>
                
            </div>
        );
    }
};

export default ArtistShow;