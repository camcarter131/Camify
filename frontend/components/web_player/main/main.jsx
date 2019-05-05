import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./home/home";
import Library from './library/library';
import LibraryContainer from './library/library_container';
import Search from './search/search';

const Main = ({ mostRecentClicked }) => {

    if (mostRecentClicked === 'home') {
        return <Home/>;
    } else if (mostRecentClicked === 'library') {
        return <Library />;
    } else if (mostRecentClicked === 'search') {
        return <Search />;
    }
    
};

export default Main;