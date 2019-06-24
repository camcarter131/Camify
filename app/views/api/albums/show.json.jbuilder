json.set! @album.id do
    json.extract! @album, :id, :name, :artist_id, :release_year
    json.photoUrl url_for(@album.photo)
    json.artist @album.artist
    json.songs @album.songs
end 