import { connect } from 'react-redux';
import Home from './home';
import { receiveAllSongs } from '../../actions/songs_actions';

const msp = (state, ownProps) => {
    debugger
    return {
        songs: Object.values(state.entities.songs),
        playlistId: ownProps.playlistId,
        kind: ownProps.match.params.kind
    }
};

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs)
});

export default connect(msp, mdp)(Home);