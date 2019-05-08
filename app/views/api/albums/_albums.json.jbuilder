albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :name, :artist_id, :release_year
    json.photoUrl url_for(album.photo)
  end
end 