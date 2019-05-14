import { connect } from 'react-redux';
import SongIndex from './song_index';
import { receiveAllSongs, removeOneSong } from '../../../actions/songs_actions';
import { playPauseSong } from '../../../actions/UI_actions';

const msp = state => {
    let loading = state.UI.loading;
    let isPlaying = state.UI.isPlaying;
    let currentSong = state.UI.currentSong;
    return ({
        loading, 
        isPlaying,
        currentSong,
        songs: Object.values(state.entities.songs) 
    })
};

const mdp = dispatch => ({ 
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    playPauseSong: (song) => dispatch(playPauseSong(song)),
    removeOneSong: id => dispatch(removeOneSong(id))
});

export default connect(msp, mdp)(SongIndex);