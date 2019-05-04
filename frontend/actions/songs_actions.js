import * as SongsAPIUtil from '../util/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

// -------------------------------------------------------------- //

export const receiveAllSongs = () => dispatch => (
    SongsAPIUtil.receiveAllSongs().then(songs => dispatch(receiveSongs(songs)))
);