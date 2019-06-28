import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from '../../library/albums/album_index_item';
import GridLoader from 'react-spinners/GridLoader';

class FeaturedAlbumIndex extends React.Component {

    componentDidMount() {
        this.props.receiveAllAlbums();
        this.props.receiveAllSongs();
    }

    // componentDidUpdate() {
    //     this.props.receiveAllAlbums();
    // }

    render() {
        const { loading } = this.props;
        if (loading) return (
            <div id="loader-songs">
                <GridLoader id="beatloader"
                    color={'#DFE2E1'}
                    loading={loading} />
            </div>
        );
        // if (!this.props.albums) return null;
        // debugger
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

export default FeaturedAlbumIndex;