import { connect } from 'react-redux';
import Songs from './songs';
import { receiveAllSongs } from '../../../../../actions/songs_actions';

const msp = state => ({
    songs: Object.values(state.entities.songs)
});

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs)
});

export default connect(msp, mdp)(Songs);