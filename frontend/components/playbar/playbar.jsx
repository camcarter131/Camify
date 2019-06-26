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
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    prev() {
        const { backQueue, song } = this.props;
        this.props.prevSong([backQueue.shift(), song]);
    }

    next() {
        const { queue, song } = this.props;
        this.props.nextSong([queue.shift(), song]);
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
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        // debugger
        if (user && song !== undefined) {
            return (
                <div id="play-bar">
                    <ReactPlayer
                        url={song.songFile}
                        id='react-player'
                        playing={isPlaying}
                        // onPlay={this.onPlay}
                    />
                    <div id="play-bar-left">
                        <div id="play-bar-album-img">
                            <Link id="play-bar-album-photo-link" to={`/albums/${song.album.id}`}>
                                <img id="album-photo-play-bar" src={song.albumPhotoUrl}>
                                </img>
                            </Link>
                        </div> 
                        <div id="play-bar-song-artist">
                            <div id="play-bar-song">
                                <Link className="play-bar-link" id="play-bar-song-link" to={`/albums/${song.album.id}`}>
                                    {song.name}
                                </Link>
                            </div>
                            <div id="play-bar-artist">
                                <Link className="play-bar-link" id="play-bar-artist-link" to={`/artists/${song.artist.id}`}>
                                    {song.artist.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="play-bar-center">
                        <div id="controls">
                            <div id="buttons"> 
                                <div id="prev-btn">
                                    <button onClick={this.prev} className="prev-next-button" id="prev">
                                    </button>
                                </div>
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
                                <div id="next-btn">
                                    <button onClick={this.next} className="prev-next-button" id="next">
                                    </button>
                                </div>
                            </div>
                            <div id="bar">

                            </div>
                        </div>
                        <div id="progress">
                            <div className = "progress-time">
                                0:00
                            </div>
                            <div id="song-slider">
                                <input type="range" id="slider" min="10" max="2000" value="1000"/>
                            </div>
                            <div className = "progress-time">
                                3:30
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