import React from 'react';
import { Link } from 'react-router-dom';


class AlbumIndexItem extends React.Component {

    render() {
        const { album } = this.props;
        return (
            <div className="album-div">
                <button className="album-btn">
                    <img id="album-photo" src={album.photoUrl}></img>
                </button>
                <Link className="album-link" id="album-name-link" to={`/albums/${album.id}`}>{album.name}</Link>
                <Link className="album-link" id="album-artist-name-link" >artist here</Link>
            </div>
        );
    }
}

export default AlbumIndexItem; 