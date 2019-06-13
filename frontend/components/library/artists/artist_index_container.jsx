import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { receiveAllArtists } from '../../../actions/artists_actions';

const msp = state => {
    let loading = state.UI.loading; 
    return ({
        loading,
        artists: Object.values(state.entities.artists)
    })
};

const mdp = dispatch => ({
    receiveAllArtists: () => dispatch(receiveAllArtists())
});

export default connect(msp, mdp)(ArtistIndex);