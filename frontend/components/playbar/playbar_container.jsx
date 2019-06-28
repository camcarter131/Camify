import { connect } from 'react-redux';
import PlayBar from './playbar';
import { logout } from '../../actions/session_actions';
import { playPauseSong, nextSong, prevSong, setVolume } from '../../actions/UI_actions';
import { withRouter } from 'react-router-dom';

const msp = ({ session, entities: { users }, UI }) => {
    // let albumId = ownProps.match.params.id;
    // let album = state.entities.albums[albumId];
    return { 
        user: users[session.id],
        song: UI.currentSong,
        queue: UI.queue,
        backQueue: UI.backQueue, 
        isPlaying: UI.isPlaying,
        volume: UI.volume,
        // album
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    playPauseSong: song => dispatch(playPauseSong(song)),
    nextSong: song => dispatch(nextSong(song)),
    prevSong: song => dispatch(prevSong(song)),
    setVolume: volume => dispatch(setVolume(volume))
});

export default withRouter(connect(msp, mdp)(PlayBar));