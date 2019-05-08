import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

    componentDidMount() {
        let albumId = this.props.match.params.id
        this.props.receiveOneAlbum(albumId);
    }


    render() {
        const { album } = this.props;

        if (album === undefined) return null;
        return (
            <div className="album-show-div">
                <div className="album-header">
                    <div id="photo-div">
                        <img id="album-show-photo" src={album.photoUrl}></img>
                    </div>
                    <div id="album-name">
                        {album.name}
                    </div>
                </div>
                <div className="album-show-body">
                    Albums
                </div>

            </div>
        );
    }
};

export default AlbumShow;