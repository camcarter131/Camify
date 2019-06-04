import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistInModal from './playlist_in_modal';
import { removeSong } from '../../../actions/playlist_songs_actions';


const msp = (state, ownProps) => { 
    return ({
        playlist: ownProps.playlist,
        name: ownProps.name,
        song: ownProps.song,
        addSongToPlaylist: ownProps.addSongToPlaylist
    })
};

const mdp = dispatch => ({
    removeSong: id => dispatch(removeSong(id))
});

export default withRouter(connect(msp, mdp)(PlaylistInModal)); 