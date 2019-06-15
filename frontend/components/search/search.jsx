import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import ArtistIndexItem from '../library/artists/artist_index_item';
import AlbumIndexItem from '../library/albums/album_index_item';
import PlaylistIndexItem from '../library/playlists/playlist_index_item';
import SongIndexItem from '../library/songs/song_index_item';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            nothingSearched: true,
            foundSongs: [],
            foundArtists: [],
            foundAlbums: [],
            foundPlaylists: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.receiveAllArtists();
        this.props.receiveAllSongs();
        this.props.receiveAllPlaylists();
        this.props.receiveAllAlbums();
    }

    handleChange (e) {
        const { songs, artists, albums, playlists } = this.props;
        let searchTerm = e.currentTarget.value;
        let foundSongs = [];
        let foundArtists = [];
        let foundAlbums = [];
        let foundPlaylists = [];
        
        songs.forEach(song => {
            if (song.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundSongs.push(song);
        });
        // console.log('Songs: ', foundSongs);
        artists.forEach(artist => {
            if (artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundArtists.push(artist);
        });
        // console.log('Artists: ', foundArtists);
        albums.forEach(album => {
            if (album.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundAlbums.push(album);
        });
        // console.log('Albums: ', foundAlbums);
        playlists.forEach(playlist => {
            if (playlist.name.toLowerCase().startsWith(searchTerm.toLowerCase())) foundPlaylists.push(playlist);
        })
        // console.log('Playlists: ', foundPlaylists);

        let setNothingSearched = false;
        if (searchTerm === "") setNothingSearched = true;
        this.setState({
            nothingSearched: setNothingSearched,
            foundSongs,
            foundArtists,
            foundAlbums,
            foundPlaylists,
        })
        
    }

    render () {
        const { loading } = this.props;
        if (loading) {
            return (
                <div id="search-loader-songs">
                    <GridLoader id="beatloader"
                        color={'#DFE2E1'}
                        loading={loading} />
                </div>
            );
        }
        const {  
                isPlaying, 
                currentSong, 
                removeOneSong, 
                playPauseSong,
                remove
            } = this.props;

        const songs = this.state.foundSongs.map(song => {
            return (
                <SongIndexItem
                    key={song.id}
                    song={song}
                    playPauseSong={playPauseSong}
                    removeOneSong={removeOneSong}
                    isPlaying={isPlaying}
                    currentSong={currentSong}
                />
            );
        });

        const artists = this.state.foundArtists.map(artist => {
            return (
                <ArtistIndexItem
                    key={artist.id}
                    artist={artist}
                />
            );
        });
        const albums = this.state.foundAlbums.map(album => {
            return (
                <AlbumIndexItem
                    key={album.id}
                    album={album}
                />
            );
        });

        const playlists = this.state.foundPlaylists.map(playlist => {
            return (
                <PlaylistIndexItem
                    key={playlist.id}
                    playlist={playlist}
                    remove={remove}
                    name={playlist.name}
                />
            );
        });

        return (
            <div id="search-main">
                <div className='search-input'>
                    <input className='search-input' placeholder="Start typing..."
                        type="text" onChange={this.handleChange} />
                </div>
                
                {this.state.nothingSearched ? (
                    <div className="search-before">
                        <div id="search-title">
                            Search Camify
                        <p id="search-subtitle">
                                Find your favorite songs, artists, albums, and playlists.
                        </p>
                        </div>
                    </div>
                ) : 
                
                (this.state.foundSongs.length===0 && this.state.foundArtists.length===0 &&
                    this.state.foundAlbums.length===0 && this.state.foundPlaylists.length===0
                    ) ? (
                        <div id="search-title">
                            No results found
                        <p id="search-subtitle">
                            Please make sure your words are spelled correctly 
                            or use less or different keywords.
                        </p>
                            </div>
                    ) : (
                    <div id="search-results">
                        <div className="search-result-section" id="songs">
                            <h2 class="search-header">
                                Songs
                            </h2>
                            {songs}
                        </div>
                        <div className="search-result-section" id="artists">
                            <h2 className = "search-header">
                                Artists
                            </h2>
                            {artists}
                        </div>
                        <div className="search-result-section" id="albums">
                            <h2 className="search-header">
                                Albums
                            </h2>
                            {albums}
                        </div>
                        <div className="search-result-section" id="playlists">
                            <h2 className="search-header">
                                Playlists
                            </h2>
                            {playlists}
                        </div>
                    </div>
                )
                }        
            </div>
        )

    }
}

export default Search;