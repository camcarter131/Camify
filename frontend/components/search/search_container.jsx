import { connect } from 'react-redux';
import Search from './search';
import { receiveAllSongs, removeOneSong } from '../../actions/songs_actions';
import { receiveAllPlaylists, remove } from '../../actions/playlists_actions';
import { receiveAllAlbums } from '../../actions/albums_actions';
import { receiveAllArtists } from '../../actions/artists_actions';
import { playPauseSong } from '../../actions/UI_actions';
// import { playPauseSong } from '../../../actions/UI_actions';

const msp = state => {
    let loading = state.UI.loading;
    let isPlaying = state.UI.isPlaying;
    let currentSong = state.UI.currentSong;
    // let isPlaying = state.UI.isPlaying;
    // let currentSong = state.UI.currentSong;
    return ({
        loading,
        isPlaying,
        currentSong,
        songs: Object.values(state.entities.songs),
        playlists: Object.values(state.entities.playlists),
        albums: Object.values(state.entities.albums),
        artists: Object.values(state.entities.artists)
    })
};

const mdp = dispatch => ({
    removeOneSong: id => dispatch(removeOneSong(id)),
    playPauseSong: (song) => dispatch(playPauseSong(song)),
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    receiveAllPlaylists: () => dispatch(receiveAllPlaylists()),
    receiveAllAlbums: () => dispatch(receiveAllAlbums()),
    receiveAllArtists: () => dispatch(receiveAllArtists()),
    remove: id => dispatch(remove(id))
});

export default connect(msp, mdp)(Search);