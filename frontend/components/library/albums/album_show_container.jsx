import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { receiveAlbum } from '../../../actions/albums_actions';
import { receiveAllArtists } from '../../../actions/artists_actions';

const msp = (state, ownProps) => {
    // debugger
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    let artists = Object.values(state.entities.artists);
    return ({
        album,
        artists
    })
};

const mdp = dispatch => ({
    receiveAlbum: (id) => dispatch(receiveAlbum(id)),
    receiveAllArtists: () => dispatch(receiveAllArtists())

});

export default connect(msp, mdp)(AlbumShow);