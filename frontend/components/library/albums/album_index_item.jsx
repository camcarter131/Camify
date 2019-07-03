import React from 'react';
import { Link } from 'react-router-dom';


class AlbumIndexItem extends React.Component {

    render() {
        const { album } = this.props;
        if (!album) return null;
        let albumPhoto = album.photoUrl;
        if (albumPhoto === undefined) albumPhoto = album.songs[0].album.photoUrl;
        return (
            <div className="album-div">
                <button className="album-btn">
                    <Link className="album-img-link" to={`/albums/${album.id}`}>
                        <img id="album-photo" src={albumPhoto}></img>
                    </Link>
                </button>
                <Link className="album-link" id="album-name-link" to={`/albums/${album.id}`}>
                    {album.name}
                </Link>
                <Link className="album-link" id="album-artist-name-link" to={`/artists/${album.artist.id}`}>
                    {album.artist.name}
                </Link>  
            </div>
        );
    }
}

export default AlbumIndexItem; 