import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { receiveAlbum, playAlbum } from '../../../actions/albums_actions';
import { playPauseSong } from '../../../actions/UI_actions';

const msp = (state, ownProps) => {
    // debugger
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    let loading = state.UI.loading;
    let isPlaying = state.UI.isPlaying;
    let currentSong = state.UI.currentSong;
    return ({ 
        album,
        loading,
        isPlaying,
        currentSong
    })
};

const mdp = dispatch => ({
    receiveAlbum: (id) => dispatch(receiveAlbum(id)),
    playPauseSong: song => dispatch(playPauseSong(song)),
    playAlbum: songs => dispatch(playAlbum(songs))
});

export default connect(msp, mdp)(AlbumShow);