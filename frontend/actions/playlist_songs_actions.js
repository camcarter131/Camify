import * as PlaylistSongsAPIUtil from '../util/playlist_songs_api_util';

export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';


export const addSong = playlistSong => ({
    type: ADD_SONG,
    playlistSong 
});

export const removeSong = playlistSong => ({
    type: REMOVE_SONG,
    id: playlistSong.id
});

export const receivePlaylistSongs = (playlistSongs) => ({
    type: RECEIVE_PLAYLIST_SONGS,
    playlistSongs
});

// -------------------------------------------------------------- //

export const addSongToPlaylist = playlistSong => dispatch => (
    PlaylistSongsAPIUtil.addSongToPlaylist(playlistSong).then(playlistSong => dispatch(addSong(playlistSong)))
);

export const removeSongFromPlaylist = id => dispatch => (
    PlaylistSongsAPIUtil.removeSongFromPlaylist(id).then(playlistSong => dispatch(removeSong(playlistSong)))
);

export const receiveAllPlaylistSongs = () => dispatch => (
    PlaylistSongsAPIUtil.receiveAllPlaylistSongs().then(playlistSongs => dispatch(receivePlaylistSongs(playlistSongs)))
);

