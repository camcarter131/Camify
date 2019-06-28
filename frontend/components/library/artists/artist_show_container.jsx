import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { receiveOneArtist, playArtist } from '../../../actions/artists_actions';

const msp = (state, ownProps) => {
    let artistId = ownProps.match.params.id;
    let artist = state.entities.artists[artistId];
    return ({
        artist
    })
};

const mdp = dispatch => {
    
    return ({
        receiveOneArtist: (id) => dispatch(receiveOneArtist(id)),
        playArtist: (songs) => dispatch(playArtist(songs))
    })
};

export default connect(msp, mdp)(ArtistShow);