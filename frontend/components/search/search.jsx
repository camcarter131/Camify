import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    return (
        <div id="search-main">
            <div className='search-input'>
                <input className='search-input' placeholder="Start typing..."
                    type="text"/>
            </div>
            <div className="search-results">
                <div>
                    Search Camify
                </div>
                
            </div>
            
        </div>
    )
}

export default Search;