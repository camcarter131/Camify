import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

class PlayBar extends React.Component{

    constructor() {
        super();
        this.state = {
            getSong: true,
            url: null,
            pip: false,
            playing: false,
            controls: false,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
        this.playPause = this.playPause.bind(this);
    }

    playPause() {
        const { playPauseSong, song } = this.props;
        playPauseSong(song);
        this.setState({ playing: !this.state.playing })
    }
    stop() {
        this.setState({ url: null, playing: false })
    }

    printDuration(duration) {
        console.log(duration);
    }

    render() {
        const { user, song, isPlaying } = this.props;
        // if (!song) this.setState({ getSong: !this.state.getSong })
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        if (user && song !== undefined) {
            return (
                <div id="play-bar">
                    <ReactPlayer
                        url={song.songFile}
                        id='react-player'
                        playing={playing}
                        // onPlay={this.onPlay}
                    />
                    <div id="play-bar-left">
                        <div id="play-bar-album-img"></div>
                        <div id="play-bar-song-artist">
                            <div id="play-bar-song">
                                {song ? song.name : null}
                            </div>
                            <div id="play-bar-artist">

                            </div>
                        </div>
                    </div>
                    <div id="play-bar-center">
                        <div id="controls">
                            <div id="buttons">

                                <div id="play-btn-div">
                                    <button onClick={this.playPause } className="control-button" id="play">
                                        {(isPlaying === true) ? (
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
    }
};

export default PlayBar;