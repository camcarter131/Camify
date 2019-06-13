import { connect } from 'react-redux';
import Search from './search';
import { receiveAllSongs } from '../../actions/songs_actions';
import { receivePlaylists } from '../../actions/playlists_actions';
import { receiveAlbums } from '../../actions/albums_actions';
import { receiveArtists } from '../../actions/artists_actions';
// import { playPauseSong } from '../../../actions/UI_actions';

const msp = state => {
    // let loading = state.UI.loading;
    // let isPlaying = state.UI.isPlaying;
    // let currentSong = state.UI.currentSong;
    return ({
        songs: Object.values(state.entities.songs),
        playlists: Object.values(state.entities.playlists),
        albums: Object.values(state.entities.albums),
        artists: Object.values(state.entities.artists)
    })
};

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    receivePlaylists: () => dispatch(receivePlaylists()),
    receiveAlbums: () => dispatch(receiveAlbums()),
    receiveArtists: () => dispatch(receiveArtists())
});

export default connect(msp, mdp)(Search);