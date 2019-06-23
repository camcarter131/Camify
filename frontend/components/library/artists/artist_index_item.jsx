import React from 'react';
import { Link } from 'react-router-dom';
 

class ArtistIndexItem extends React.Component {

    render() {
        const { artist } = this.props;
        return (
            // <div className="song-div">
            //     <Link to={`/artists/${artist.id}`}>{artist.name}</Link> 
            //     <img id="user-photo" src={artist.photoUrl}></img>
            // </div> 
            <div className="artist-div">
                <button className="artist-btn">
                    <img id="artist-photo" src={artist.indexPhotoUrl}></img>
                </button> 
                <Link className="artist-link" id="artist-name-link" to={`/artists/${artist.id}`}>{artist.name}</Link>
            </div>
        ); 
    }
} 

export default ArtistIndexItem; 