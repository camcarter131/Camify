import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const PlayBar = ({ user, song, isPlaying, playSong }) => {

    if (user) { 
        return (
            <div id="play-bar">
                {isPlaying ? (<ReactPlayer id="react-player" url= {song.songFile} playing />
                ) : 
                    (null)
                }
                <div id="play-bar-left">
                    {song? song.name : null }
                </div>
                <div id="play-bar-center">
                    <div id="controls">
                        <div id="buttons">
                            <button onClick={() => playSong(song) }className="control-button" id="play"></button>
                        </div>
                        <div id="bar">

                        </div>
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