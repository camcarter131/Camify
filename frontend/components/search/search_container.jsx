import { connect } from 'react-redux';
import Search from './search';
import { receiveAllSongs } from '../../actions/songs_actions';
import { receiveAllPlaylists } from '../../actions/playlists_actions';
import { receiveAllAlbums } from '../../actions/albums_actions';
import { receiveAllArtists } from '../../actions/artists_actions';
// import { playPauseSong } from '../../../actions/UI_actions';

const msp = state => {
    let loading = state.UI.loading;
    // let isPlaying = state.UI.isPlaying;
    // let currentSong = state.UI.currentSong;
    return ({
        loading,
        songs: Object.values(state.entities.songs),
        playlists: Object.values(state.entities.playlists),
        albums: Object.values(state.entities.albums),
        artists: Object.values(state.entities.artists)
    })
};

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    receiveAllAlbums: () => dispatch(receiveAllAlbums()),
    receiveAllArtists: () => dispatch(receiveAllArtists())
});

export default connect(msp, mdp)(Search);