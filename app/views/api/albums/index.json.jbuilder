@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.name album.name
    json.artist_id album.artist_id
    json.release_year album.release_year
    json.songs album.songs.map {|song| {id: song[:id], name: song[:name], duration: song[:duration]}}
    json.artist album.artist
    json.photoUrl url_for(album.photo)
  end
end

