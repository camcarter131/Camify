import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from '../albums/album_index_item';
import SongIndexItem from '../songs/song_index_item';
import GridLoader from 'react-spinners/GridLoader';

class ArtistShow extends React.Component {

    componentDidMount() {
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

        if (artist === undefined || artist.albums === undefined ) return null;
        
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
            <div className="artist-show-div">
                <div className="artist-header" id={`${artist.name[0]}`}>
                    <div id="artist-name"> 
                        {artist.name} 
                    </div>
                    <div id='artist-show-button'>
                        <button onClick={() => playArtist(Object.values(artist.albums[0].songs))} id="playlist-play-btn">PLAY</button>
                    </div>
                </div>
                <div className="artist-show-lower">
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

export default ArtistShow;