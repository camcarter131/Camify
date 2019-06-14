import * as ArtistsAPIUtil from '../util/artists_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const START_LOADING = 'START_LOADING';

export const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists 
});

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST, 
    artist
});
 
export const startLoading = () => ({
    type: START_LOADING
});

// -------------------------------------------------------------- //

export const receiveAllArtists = () => dispatch => {
    dispatch(startLoading());
    return ArtistsAPIUtil.receiveAllArtists().then(artists => dispatch(receiveArtists(artists)))

};

export const receiveOneArtist = (id) => dispatch => (
    ArtistsAPIUtil.receiveOneArtist(id).then(artist => dispatch(receiveArtists(artist))));