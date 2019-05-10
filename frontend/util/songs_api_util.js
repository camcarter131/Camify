export const receiveAllSongs = () => (
    $.ajax({
        url: "api/songs",
        method: "GET"
    })
); 

export const removeOneSong = (id) => (
    $.ajax({
        url: `api/songs/${id}`,
        method: "DELETE"
    })
); 