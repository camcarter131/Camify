import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash';
import Home from './home/home'

const WebPlayer = ( {user, logout} ) => {
    return (
        user ? (
            <Home user={user} logout={logout}/>
        )
        : <Splash />
    )
};

export default WebPlayer;