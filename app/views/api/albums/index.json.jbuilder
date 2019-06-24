@albums.each do |album|
  json.set! album.id do
    @artists.each do |art|
        if album.artist_id == art.id
            json.extract! album, :id, :name, :artist_id, :release_year
            json.artist art
            json.photoUrl url_for(album.photo)
            json.songs do 
              @songs.each do |s|
                if s.album_id == album.id
                  json.extract! s, :id, :name, :duration
                end
              end
            end
        end
    end
  end
end 