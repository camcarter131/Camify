import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { receiveOneAlbum } from '../../../actions/albums_actions';

const msp = (state, ownProps) => {
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    return ({
        album
    })
};

const mdp = dispatch => ({
    receiveOneAlbum: (id) => dispatch(receiveOneAlbum(id))
});

export default connect(msp, mdp)(AlbumShow);