import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { receiveAllAlbums } from '../../../actions/albums_actions';

const msp = state => ({
    albums: Object.values(state.entities.albums)
});

const mdp = dispatch => ({
    receiveAllAlbums: () => dispatch(receiveAllAlbums())
});

export default connect(msp, mdp)(AlbumIndex);