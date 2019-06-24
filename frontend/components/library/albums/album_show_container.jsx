import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { receiveAlbum } from '../../../actions/albums_actions';
import { playPauseSong } from '../../../actions/UI_actions';

const msp = (state, ownProps) => {
    // debugger
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    let loading = state.UI.loading;
    return ({ 
        album,
        loading
    })
};

const mdp = dispatch => ({
    receiveAlbum: (id) => dispatch(receiveAlbum(id)),
    playPauseSong: song => dispatch(playPauseSong(song))
});

export default connect(msp, mdp)(AlbumShow);