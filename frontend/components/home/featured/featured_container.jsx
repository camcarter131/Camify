import { connect } from 'react-redux';
import Featured from './featured';
import { receiveOneArtist, playArtist } from '../../../actions/artists_actions';
import { playPauseSong } from '../../../actions/UI_actions';

const msp = (state, ownProps) => {
    let artistId = 6; 
    let artist = state.entities.artists[artistId];
    let isPlaying = state.UI.isPlaying;
    let currentSong = state.UI.currentSong;
    return ({
        artist,
        isPlaying,
        currentSong
    })
};

const mdp = dispatch => {

    return ({
        receiveOneArtist: (id) => dispatch(receiveOneArtist(id)),
        playArtist: (songs) => dispatch(playArtist(songs)),
        playPauseSong: song => dispatch(playPauseSong(song))
    })
};

export default connect(msp, mdp)(Featured);