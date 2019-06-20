import * as SongsAPIUtil from '../util/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_SONG = 'RECEIVE_SONG';
export const START_LOADING = 'START_LOADING';

export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});

export const removeSong = id => ({ 
    type: REMOVE_SONG, 
    id
});

export const startLoading = () => ({
    type: START_LOADING
});
 
// -------------------------------------------------------------- //

export const receiveAllSongs = () => dispatch => {
    dispatch(startLoading());
    return SongsAPIUtil.receiveAllSongs().then(songs => dispatch(receiveSongs(songs)))
};

export const removeOneSong = (id) => dispatch => (
    SongsAPIUtil.removeOneSong(id).then(() => dispatch(removeSong(id)))
);