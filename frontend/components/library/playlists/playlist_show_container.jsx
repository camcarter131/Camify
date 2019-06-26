import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { receivePlaylist, remove } from '../../../actions/playlists_actions';
import { playPauseSong, playPlaylist } from '../../../actions/UI_actions';

const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.id;
    let playlist = state.entities.playlists[playlistId];
    let userId = state.session.id;
    let name = state.entities.users[userId].displayed_name;
    let songs = state.entities.songs;
    let loading = state.UI.loading;
    let isPlaying = state.UI.isPlaying;
    let currentSong = state.UI.currentSong;
    // debugger
    return ({ 
        playlist,
        playlistId, 
        name,
        songs,
        loading,
        isPlaying,
        currentSong
    })
};
 
const mdp = dispatch => {
    return ({
        receivePlaylist: id => dispatch(receivePlaylist(id)),
        remove: id => dispatch(remove(id)),
        playPauseSong: song => dispatch(playPauseSong(song)),
        playPlaylist: songs => dispatch(playPlaylist(songs))
    });
};

export default connect(msp, mdp)(PlaylistShow); 