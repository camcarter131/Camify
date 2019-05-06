import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash';
import Main from './main/main'
import PlayBar from './playbar/playbar';
import SideNavContainer from './side_nav/side_nav_container';

const WebPlayer = ({ home_lib_search }) => {
    let mostRecentClicked = 'library';
    return (
        <div>
            <SideNavContainer />
            <Main mostRecentClicked={mostRecentClicked} home_lib_search={home_lib_search}/>
            <PlayBar/>
        </div>
    )
};

export default WebPlayer;