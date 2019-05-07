import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeletePlaylistModal from './delete_playlist_modal';
import { create } from '../../../actions/playlists_actions';


const msp = (state, ownProps) => {
    return ({
        show: ownProps.show,
        playlist: ownProps.playlist,
        remove: ownProps.remove,
        handleClose: ownProps.handleClose
    })
};

const mdp = dispatch => ({
    create: playlist => dispatch(create(playlist))
});

export default withRouter(connect(msp, mdp)(DeletePlaylistModal));