import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

class Search extends React.Component {


    componentDidMount() {
        // console.log(this.props);
        // this.props.receiveAllSongs();
        // this.props.receivePlaylists();
        // this.props.receiveAlbums();
        // this.props.receiveArtists();
    }

    // handleChange (e) {
    //     console.log("Changed");
    // }

    render () {
        // const {songs, receiveAllSongs} = this.props;
        // if (!receiveAllSongs ) return undefined;
        // Object.values(songs).forEach(song => {
        //     console.log(song.title);
        // });

        return (
            <div id="search-main">
                <div className='search-input'>
                    <input className='search-input' placeholder="Start typing..."
                        type="text"/>
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