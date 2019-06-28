@songs.each do |song|
    @albums.each do |alb|
        @artists.each do |art|
            if alb.id == song.album_id && art.id == alb.artist_id
                json.set! song.id do
                    json.extract! song, :id, :name, :album_id, :duration
                    json.songFile url_for(song.song_file)
                    json.album alb
                    json.albumPhotoUrl url_for(alb.photo)
                    json.artist art 
                end
            end
        end 
    end
end

