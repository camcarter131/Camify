export const PLAY_PAUSE_SONG = 'PLAY_PAUSE_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const PREV_SONG = 'PREV_SONG';

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
 


// -------------------------------------------------------------- //
