import React from 'react';
import SongIndexItem from '../songs/song_index_item';
import { Link } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

class AlbumShow extends React.Component {

    componentDidMount() {
        let albumId = this.props.match.params.id
        // debugger
        this.props.receiveAlbum(albumId);
    }

  
    render() { 
        const { album, playPauseSong, loading, playAlbum, isPlaying, currentSong } = this.props;

        if (loading) return (
            <div id="loader">
                <GridLoader id="beatloader"
                    color={'#DFE2E1'}
                    loading={loading} />
            </div>
        );
        
        if (album === undefined) return null;
        const artist = album.artist;
        
        const songs = album.songs.map(song => {
            return (
                <SongIndexItem
                    key={song.id}
                    song={song}
                    artist={artist}
                    album={album} 
                    playPauseSong={playPauseSong}
                    isPlaying={this.props.isPlaying}
                    currentSong={this.props.currentSong}
                />

            ) 
        }); 
        let numSongs = album.songs.length;
        return (
            <div className="album-show-div">
                <div className = "contentSpacing"> 
                    <div className="album-header"> 
                        <div id="album-photo-div">
                            <img id="album-show-photo" src={album.photoUrl}></img>
                        </div>
                        <div id="album-info-div">
                            <div id="album-info-top">
                                <div id="album-name">
                                    {album.name}
                                </div>
                                <div id="album-show-artist-name">
                                    <span id='by'>By&nbsp;</span><Link className="album-song-links" to={`/artists/${artist.id}`}><span id='author'>{artist.name}</span>
                                    </Link>
                                </div>
                                <div id='playlist-show-info'>
                                    <span>
                                        {album.release_year}
                                    </span>
                                    <span id="dot-separator">
                                        .
                                    </span>
                                    <span>
                                        {(numSongs != 1) ?
                                            `${numSongs} SONGS` :
                                            `${numSongs} SONG`}
                                    </span>
                                </div>
                            </div>
                            <div id='album-show-buttons'>
                                <button onClick={() => playAlbum(Object.values(album.songs))} id="playlist-play-btn">PLAY</button>
                            </div>
                        </div>
                    </div>
                    <div className="album-show-body">
                        {songs}
                    </div>
                </div>
            </div>
        );
    }
};

export default AlbumShow;