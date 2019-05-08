import React from 'react';
import { Link } from 'react-router-dom';

const PlayBar = ({user}) => {

    if (user) {
        return (
            <div id="play-bar">
                <div id="play-bar-left"></div>
                <div id="play-bar-center"></div>
                    <div id="controls">
                        <div id="buttons">

                        </div>
                        <div id="bar">

                        </div>
                    </div>
                <div id="play-bar-right"></div>
            </div>
        );
    } else {
        return null;
    }
};

export default PlayBar;