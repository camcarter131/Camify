import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./home/home";
import Library from './library/library';
import LibraryContainer from './library/library_container';
import Search from './search/search';

const Main = ({ home_lib_search }) => {

    if (home_lib_search === 'browse') {
        return <Home/>;
    } else if (home_lib_search === 'collection') {
        return <LibraryContainer/>;
    } else if (home_lib_search === 'search') {
        return <Search />;
    }
    
};

export default Main;