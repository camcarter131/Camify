import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash';
import Main from './main/main'
import PlayBar from './playbar/playbar';
import SideNavContainer from './side_nav/side_nav_container';

const WebPlayer = ({ user }) => {
    let mostRecentClicked = 'library';
    return (
        user ? (
            <div>
                <SideNavContainer />
                <Main mostRecentClicked={mostRecentClicked}/>
                <PlayBar/>
            </div>
        )
        : <Splash />
    )
};

export default WebPlayer;