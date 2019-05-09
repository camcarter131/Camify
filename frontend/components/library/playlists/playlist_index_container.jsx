import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { receiveAllPlaylists, remove } from '../../../actions/playlists_actions';

const msp = state => {
    // debugger
    let userId = state.session.id;
    let name = state.entities.users[userId].displayed_name;
    return ({
        playlists: Object.values(state.entities.playlists),
        name 
    })
};

const mdp = dispatch => ({
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    remove: id => dispatch(remove(id))
});

export default connect(msp, mdp)(PlaylistIndex); 