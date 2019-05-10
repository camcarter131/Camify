import { connect } from 'react-redux';
import PlayBar from './playbar';
import { logout } from '../../actions/session_actions';
import { playPauseSong } from '../../actions/UI_actions';

const msp = ({ session, entities: { users }, UI }) => ({
    user: users[session.id],
    song: UI.currentSong,
    isPlaying: UI.isPlaying
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    playPauseSong: song => dispatch(playPauseSong(song))
});

export default connect(msp, mdp)(PlayBar);