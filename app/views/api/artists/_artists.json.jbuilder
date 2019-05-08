artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :description
    json.photoUrl url_for(artist.photo)
    json.indexPhotoUrl url_for(artist.index_photo)
  end
end 