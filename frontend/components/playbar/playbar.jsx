import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const PlayBar = ({ user, song, isPlaying, playPauseSong }) => {
    let audio = document.getElementById("react-player");
    if (user) { 
        return (
            <div id="play-bar">
                {isPlaying ? (<ReactPlayer id="react-player" url= {song.songFile} playing={isPlaying} 
                    controls={true} playbackRate={1} loop={true}
                />
                ) : 
                    (null) 
                }
                <div id="play-bar-left">
                    {song? song.name : null }
                </div>
                <div id="play-bar-center">
                    <div id="controls">
                        <div id="buttons">
                            
                            <div id="play-btn-div">
                                <button onClick={() => playPauseSong(song) }className="control-button" id="play">
                                    {(isPlaying === true ) ? (
                                        <i className="fa fa-pause-circle fa-2x-playbar" aria-hidden="true"></i>
                                    ) : (
                                            <i className="fa fa-play-circle fa-2x-playbar" aria-hidden="true"></i>
                                        )
                                    }
                                </button>
                            </div>
                            
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