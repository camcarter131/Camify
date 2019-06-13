import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);

    }

    handleChange (e) {
        console.log("Changed");
    }

    render () {

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