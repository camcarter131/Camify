import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    return (
        <div id="search-main">
            <div className="search-input-box">
                <input className='search-input' placeholder="Start typing..."
                    type="text"/>
            </div>
            <div className="search-results">
                Search Camify
            </div>
        </div>
    )
}

export default Search;