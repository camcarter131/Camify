import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { receivePlaylist, remove } from '../../../actions/playlists_actions';

const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.id;
    let playlist = state.entities.playlists[playlistId];
    let userId = state.session.id;
    let name = state.entities.users[userId].displayed_name;
    // debugger
    return ({
        playlist,
        playlistId,
        name
    })
};

const mdp = dispatch => {
    return ({
        receivePlaylist: id => dispatch(receivePlaylist(id)),
        remove: id => dispatch(remove(id))
    });
};

export default connect(msp, mdp)(PlaylistShow); 