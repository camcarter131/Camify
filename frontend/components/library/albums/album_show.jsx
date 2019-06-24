import React from 'react';
import SongIndexItem from '../songs/song_index_item';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

    componentDidMount() {
        let albumId = this.props.match.params.id
        // debugger
        this.props.receiveAlbum(albumId);
        this.props.receiveAllArtists();
    }

  
    render() {
        const { album, artists } = this.props;
        let artist;
        artists.forEach(a => {
            if (a.id == album.artist_id) artist = a;
        });
        // debugger
        if (album === undefined || artist === undefined) return null;
        return (
            <div className="album-show-div">
                <div className = "contentSpacing">
                    <div className="album-header">
                        <div id="album-photo-div">
                            <img id="album-show-photo" src={album.photoUrl}></img>
                        </div>
                        <div id="album-name">
                            {album.name}
                        </div>
                        <div id="artist-name">
                            {artist.name}
                        </div>
                    </div>
                    <div className="album-show-body">
                    </div>
                </div>
            </div>
        );
    }
};

export default AlbumShow;