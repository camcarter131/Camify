import * as PlaylistsAPIUtil from '../util/playlists_api_util';

export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const START_LOADING = 'START_LOADING';

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

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receiveOnePlaylist = (payload) => ({
    type: RECEIVE_PLAYLIST,
    payload 
});

export const startLoading = () => ({
    type: START_LOADING
});

// -------------------------------------------------------------- //

export const create = playlist => dispatch => (
    PlaylistsAPIUtil.create(playlist).then(playlist => dispatch(createPlaylist(playlist)))
);

export const remove = id => dispatch => (
    PlaylistsAPIUtil.remove(id).then(() => dispatch(removePlaylist(id)))
);

export const receiveAllPlaylists = () => dispatch => {
    dispatch(startLoading()); 
    PlaylistsAPIUtil.receiveAllPlaylists().then(playlists => dispatch(receivePlaylists(playlists)))
};

export const receivePlaylist = id => dispatch => {
    dispatch(startLoading()); 
    return PlaylistsAPIUtil.receivePlaylist(id).then(playlist => dispatch(receiveOnePlaylist(playlist)))
}
