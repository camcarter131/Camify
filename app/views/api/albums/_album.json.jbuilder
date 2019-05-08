json.set! album.id do
    json.extract! album, :id, :name, :artist_id, :release_year
end 