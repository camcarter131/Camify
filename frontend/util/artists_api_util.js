export const receiveAllArtists = () => (
    $.ajax({
        url: "api/artists",
        method: "GET"
    })
);

export const receiveOneArtist = (id) => (
    $.ajax({
        url: `api/artists/${id}`,
        method: "GET"
    })
); 