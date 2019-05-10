import { connect } from 'react-redux';
import SongIndex from './song_index';
import { receiveAllSongs } from '../../../actions/songs_actions';
import { playSong } from '../../../actions/UI_actions';

const msp = state => ({
    songs: Object.values(state.entities.songs) 
});

const mdp = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    playSong: (song) => dispatch(playSong(song))
});

export default connect(msp, mdp)(SongIndex);