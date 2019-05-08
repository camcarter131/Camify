
json.songs do
    json.partial! "api/songs/songs", songs: @playlist.songs
end

json.playlist do
    json.partial! "api/playlists/playlist", playlist: @playlist
end  