songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :name, :album_id, :duration
    json.songFile url_for(song.song_file)
  end
end