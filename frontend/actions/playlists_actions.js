import * as PlaylistsAPIUtil from '../util/playlists_api_util';

export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
// export const REMOVE_SONG = 'REMOVE_SONG';
// export const ADD_SONG = 'ADD_SONG';

// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const createPlaylist = playlist => ({
    type: CREATE_PLAYLIST,
    playlist
});

export const removePlaylist = id => ({
    type: REMOVE_PLAYLIST,
    id
});

// -------------------------------------------------------------- //

export const create = playlist => dispatch => (
    PlaylistsAPIUtil.create(playlist).then(playlist => dispatch(createPlaylist(playlist)))
);

export const remove = id => dispatch => (
    PlaylistsAPIUtil.remove(id).then(() => dispatch(removePlaylist(id)))
);
