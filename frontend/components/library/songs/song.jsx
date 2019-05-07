import React from 'react';
import { Link } from 'react-router-dom';


const Song = ({ song }) => {
    return (
        <div className="song-div">
            <li className="song-li">
                {song.name}
            </li>
        </div>
    );
};

export default Song; 