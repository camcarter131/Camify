import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from '../../library/albums/album_index_item';
import SongIndexItem from '../../library/songs/song_index_item';
import GridLoader from 'react-spinners/GridLoader';

class Featured extends React.Component {

    componentDidMount() {
        // debugger
        // this.props.receiveAllArtists();
        let artistId = this.props.match.params.id
        this.props.receiveOneArtist(artistId);
    }


    render() {
        const { artist, loading, playArtist, playPauseSong, isPlaying, currentSong } = this.props;
        
        if (loading) return (
            <div id="loader">
                <GridLoader id="beatloader"
                    color={'#DFE2E1'}
                    loading={loading} />
            </div>
        );
        // debugger
        // const artist = Object.values(artists)[0];
        if (artist === undefined || artist.albums === undefined) return null;
        // debugger
        const albums = Object.values(artist.albums).map(album => {
            return (
                <AlbumIndexItem
                    key={album.id}
                    album={album}
                />
            );
        });

        const songs = artist.albums[0].songs.map(song => {
            return (
                <SongIndexItem
                    key={song.id}
                    song={song}
                    artist={song.artist}
                    album={song.album}
                    playPauseSong={playPauseSong}
                    isPlaying={isPlaying}
                    currentSong={currentSong}
                />
            );
        });
        return (
            <div className="featured-show-div">
                <div className="featured-show-lower">
                    <h2 className="artist-show-header">
                        Popular
                    </h2>
                    {songs}

                    <h2 className="artist-show-header">
                        Albums
                    </h2>
                    <div id="artist-show-index">
                        {albums}
                    </div>
                </div>
            </div>
        );
    }
};

export default Featured;