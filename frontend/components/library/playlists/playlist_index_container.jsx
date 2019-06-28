import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { receiveAllPlaylists, remove } from '../../../actions/playlists_actions';
import { receiveAllSongs } from '../../../actions/songs_actions';

const msp = state => {  
    // debugger
    let userId = state.session.id;
    let name = state.entities.users[userId].displayed_name;
    let loading = state.UI.loading; 
 
    return ({
        loading,
        playlists: Object.values(state.entities.playlists),
        name,
        songs: Object.values(state.entities.songs) 
    })
};

const mdp = dispatch => ({
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    remove: id => dispatch(remove(id)),
    receiveAllSongs: () => dispatch(receiveAllSongs())
});

export default connect(msp, mdp)(PlaylistIndex); 