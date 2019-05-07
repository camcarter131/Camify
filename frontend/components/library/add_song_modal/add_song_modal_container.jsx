import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddSongModal from './add_song_modal';
import { create, receiveAllPlaylists } from '../../../actions/playlists_actions';
import { addSongToPlaylist } from '../../../actions/playlist_songs_actions';


const msp = (state, ownProps) => {
    return ({
        playlists: Object.values(state.entities.playlists),
        show: ownProps.show,  
        song: ownProps.song,
        handleClose: ownProps.handleClose
    })
};

const mdp = dispatch => ({
    create: playlist => dispatch(create(playlist)),
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    addSongToPlaylist: (playlistSong) => dispatch(addSongToPlaylist(playlistSong))
});

export default withRouter(connect(msp, mdp)(AddSongModal)); 