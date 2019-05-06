export const create = playlist => (
    $.ajax({
        url: "api/playlists",
        method: "POST",
        data: { playlist }
    })
);
 
export const receiveAllPlaylists = () => (
    $.ajax({
        url: "api/playlists",
        method: "GET"
    })
); 


export const remove = id => (
    $.ajax({
        url: `api/playlists/${id}`,
        method: "DELETE"
    })
);

// export const addSong = song => (
//     $.ajax({
//         url: "api/playlists",
//         method: "PATCH",
//         data: { song }
//     })
// );

// export const removeSong = song => (
//     $.ajax({
//         url: `api/playlists/${id}`,
//         method: "DELETE"
//     })
// );


// export const display = id => (
//     $.ajax({
//         url: `api/playlists/${id}`,
//         method: "GET"
//     })
// )