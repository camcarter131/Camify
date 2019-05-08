export const addSongToPlaylist = playlistSong => (
    $.ajax({
        url: "api/playlist_songs",
        method: "POST",
        data: { playlistSong }
    })
);

export const removeSongFromPlaylist = id => (
    $.ajax({
        url: `api/playlist_songs/${id}`,
        method: "DELETE"
    })
); 

export const receiveAllPlaylistSongs = () => (
    $.ajax({
        url: "api/playlist_songs",
        method: "GET"
    })
);


