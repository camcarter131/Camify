import React from 'react';
import { Link } from 'react-router-dom';

const PlayBar = ({user}) => {

    if (user) {
        return (
            <div id="play-bar">
                PlayBar
            </div>
        );
    } else {
        return null;
    }
};

export default PlayBar;