songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :name, :album_id, :duration
  end
end