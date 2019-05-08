import React from 'react';
import { Link } from 'react-router-dom';


class AlbumIndexItem extends React.Component {

    render() {
        const { album } = this.props;
        return (
            <div className="song-div">
                {album.name}
            </div>
        );
    }
}

export default AlbumIndexItem; 