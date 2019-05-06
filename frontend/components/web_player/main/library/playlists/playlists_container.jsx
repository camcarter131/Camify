import { connect } from 'react-redux';
import Playlists from './playlists';
import { receiveAllPlaylists, remove } from '../../../../../actions/playlists_actions';

const msp = state => ({
    playlists: Object.values(state.entities.playlists)
});

const mdp = dispatch => ({
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    remove: id => dispatch(remove(id))
});

export default connect(msp, mdp)(Playlists); 