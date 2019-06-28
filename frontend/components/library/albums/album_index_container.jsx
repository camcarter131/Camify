import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { receiveAllAlbums } from '../../../actions/albums_actions';
import { receiveAllSongs } from '../../../actions/songs_actions';

const msp = state => {
    let loading = state.UI.loading;
    return ({
        loading, 
        albums: Object.values(state.entities.albums)
    })
};

const mdp = dispatch => ({
    receiveAllAlbums: () => dispatch(receiveAllAlbums()),
    receiveAllSongs: () => dispatch(receiveAllSongs())
});

export default connect(msp, mdp)(AlbumIndex); 