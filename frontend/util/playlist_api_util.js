// show, create, delete, 

export const create = playlist => (
    $.ajax({
        url: "api/playlists",
        method: "POST",
        data: { playlist }
    })
);

export const update = playlist => (
    $.ajax({
        url: "api/playlists",
        method: "PATCH",
        data: { playlist }
    })
);

export const remove = id => (
    $.ajax({
        url: `api/playlists/${id}`,
        method: "DELETE"
    })
);

export const display = playlist => (
    $.ajax({
        url: `api/playlists/${playlist.id}`,
        method: "GET"
    })
)