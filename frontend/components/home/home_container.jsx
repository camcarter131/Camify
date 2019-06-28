import { connect } from 'react-redux';
import Home from './home';
import { receiveAllSongs } from '../../actions/songs_actions';

const msp = (state, ownProps) => {
    return {
        songs: Object.values(state.entities.songs),
        playlistId: ownProps.playlistId,
        type: ownProps.match.params.type
    }
};

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs)
});

export default connect(msp, mdp)(Home);