export const receiveAllAlbums = () => (
    $.ajax({
        url: "api/albums",
        method: "GET"
    }) 
); 

export const receiveAlbum = (id) => (
    $.ajax({
        url: `api/albums/${id}`,
        method: "GET"
    })
); 