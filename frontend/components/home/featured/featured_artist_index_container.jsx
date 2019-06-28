import { connect } from 'react-redux';
import FeaturedArtistIndex from './featured_artist_index';
import { receiveAllArtists } from '../../../actions/artists_actions';

const msp = state => {
    let loading = state.UI.loading;
    return ({
        loading,
        artists: Object.values(state.entities.artists)
    })
};

const mdp = dispatch => ({
    receiveAllArtists: () => dispatch(receiveAllArtists()),
    receiveAllSongs: () => dispatch(receiveAllSongs())
});

export default connect(msp, mdp)(FeaturedArtistIndex);