import React from 'react';


const Playlist = ({ playlist, remove }) => {
    return (
        <div className="playlist-div">
            <li className="playlist-li">
                {playlist.name} &nbsp;
                <button onClick={() => remove(playlist.id)}>Delete</button>
            </li>
        </div>
    );
};

export default Playlist; 