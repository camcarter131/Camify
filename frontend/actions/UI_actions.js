export const PLAY_PAUSE_SONG = 'PLAY_PAUSE_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const PREV_SONG = 'PREV_SONG';
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST';
export const SET_VOLUME = 'SET_VOLUME';

export const playPauseSong = (song) => ({
    type: PLAY_PAUSE_SONG,
    song
});

export const nextSong = (song) => ({
    type: NEXT_SONG,
    song 
});

export const prevSong = (song) => ({
    type: PREV_SONG,
    song
});

export const playPlaylist = (songs) => ({
    type: PLAY_PLAYLIST,
    songs
});

export const setVolume = (volume) => ({
    type: SET_VOLUME,
    volume
});
 


// -------------------------------------------------------------- //
