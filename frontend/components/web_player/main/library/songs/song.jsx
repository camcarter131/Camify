import React from 'react';
import { Link } from 'react-router-dom';


const Song = ({ song }) => {
    return (
        <li>
            {song.name}
        </li>);
};

export default Song; 