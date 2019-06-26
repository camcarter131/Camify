import { connect } from 'react-redux';
import PlayBar from './playbar';
import { logout } from '../../actions/session_actions';
import { playPauseSong, nextSong, prevSong, setVolume } from '../../actions/UI_actions';

const msp = ({ session, entities: { users }, UI }) => {
    
    return { 
        user: users[session.id],
        song: UI.currentSong,
        queue: UI.queue,
        backQueue: UI.backQueue,
        isPlaying: UI.isPlaying,
        volume: UI.volume
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    playPauseSong: song => dispatch(playPauseSong(song)),
    nextSong: song => dispatch(nextSong(song)),
    prevSong: song => dispatch(prevSong(song)),
    setVolume: volume => dispatch(setVolume(volume))
});

export default connect(msp, mdp)(PlayBar);