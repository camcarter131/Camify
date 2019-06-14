import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import ArtistIndexItem from '../library/artists/artist_index_item';
import SongIndexItem from '../library/songs/song_index_item';

class Search extends React.Component {

    componentDidMount() {
        this.props.receiveAllArtists();
        this.props.receiveAllSongs();
        this.props.receiveAllPlaylists();
        this.props.receiveAllAlbums();
    }

    handleChange (e) {
        // let { artists } = this.props;
        let searchTerm = e.currentTarget.value;
        console.log(searchTerm);
        // let foundArtists = [];
        
        // artists.forEach(artist => {
        //     if (artist.name.startsWith(searchTerm)) foundArtists.push(artist);
        // })
        // console.log(foundArtists);
        // return foundArtists;
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
        const { songs, artists, albums, playlists } = this.props;

        return (
            <div id="search-main">
                <div className='search-input'>
                    <input className='search-input' placeholder="Start typing..."
                        type="text" onChange={this.handleChange} />
                </div>
                <div className="search-results">
                    <div id="search-text">
                        Search Camify
                        <p id="search-subtitle">
                            Find your favorite songs, artists, albums, and playlists.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        )

    }
}

export default Search;