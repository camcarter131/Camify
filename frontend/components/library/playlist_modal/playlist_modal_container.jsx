import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistModal from './playlist_modal';
import { create } from '../../../actions/playlists_actions';


const msp = (state, ownProps) => {
    return ({
        show: ownProps.show,
        handleClose: ownProps.handleClose,
        currentUserId: state.session.id
    })
};

const mdp = dispatch => ({
    create: playlist => dispatch(create(playlist))
});

export default withRouter(connect(msp, mdp)(PlaylistModal));