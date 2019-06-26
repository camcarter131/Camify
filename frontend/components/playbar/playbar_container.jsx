import { connect } from 'react-redux';
import PlayBar from './playbar';
import { logout } from '../../actions/session_actions';
import { playPauseSong, nextSong, prevSong } from '../../actions/UI_actions';

const msp = ({ session, entities: { users }, UI }) => {
    
    return { 
        user: users[session.id],
        song: UI.currentSong,
        queue: UI.queue,
        isPlaying: UI.isPlaying
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    playPauseSong: song => dispatch(playPauseSong(song)),
    nextSong: song => dispatch(nextSong(song)),
    prevSong: song => dispatch(prevSong(song))
});

export default connect(msp, mdp)(PlayBar);