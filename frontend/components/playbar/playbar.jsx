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
        this.setVolume = this.setVolume.bind(this);
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

    setVolume(e) {
        // this.props.setVolume();
        this.setState({
            volume: parseInt(e.target.value)
        });
    }

    render() {
        const { user, song, isPlaying } = this.props;
        const { url, playing, controls, volume, light, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        // debugger
        if (user && song !== undefined) {
            return (
                <div id="play-bar">
                    <ReactPlayer
                        url={song.songFile}
                        id='react-player'
                        playing={isPlaying}
                        volume ={volume}
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
                        <div id="buttons"> 
                            <div id="shuffle-btn" className="btn-div">
                                <button onClick={this.next} className="prev-next-button" id="shuffle">
                                    <i class="fa fa-random fa-light" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div id="prev-btn" className="btn-div">
                                <button onClick={this.prev} className="prev-next-button" id="prev">
                                    <i class="fa fa-step-backward" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div id="play-btn-div">
                                <button onClick={this.playPause } className="control-button" id="play">
                                    {(isPlaying === true) ? (
                                        <i class="fa fa-pause"></i>
                                    ) : (
                                            <i class="fa fa-play"></i>
                                        )
                                    }
                                </button>
                            </div>
                            <div id="next-btn" className="btn-div">
                                <button onClick={this.next} className="prev-next-button" id="next">
                                    <i class="fa fa-step-forward" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div id="loop-btn" className="btn-div">
                                <button onClick={this.next} className="prev-next-button" id="loop">
                                    <i class="fa fas fa-redo"></i>
                                </button>
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
                    <div id="play-bar-right">
                        {(this.state.volume === 0) ? (
                            <i className="fas fa-volume-off"></i>
                        ) : (this.state.volume < .5) ? (
                            <i className="fas fa-volume-down"></i> 
                        ) : (
                            <i className="fas fa-volume-up"></i>
                        )}
                        
                        <div id="volume-bar">
                            <input onChange={e => this.setVolume(e)} type="range" id="volume-slider" min={0} max={1} value={volume} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
};

export default PlayBar;