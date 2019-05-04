export const receiveAllSongs = () => (
    $.ajax({
        url: "api/songs",
        method: "GET"
    })
);