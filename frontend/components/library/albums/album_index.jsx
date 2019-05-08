import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

    componentDidMount() {
        this.props.receiveAllAlbums();
    }


    render() {
        const albums = Object.values(this.props.albums).map(album => {
            return (
                <AlbumIndexItem
                    key={album.id}
                    album={album}
                />
            );
        });

        return (
            <div id='album-index-div'>
                {albums}
            </div>
        );
    }
};

export default AlbumIndex;