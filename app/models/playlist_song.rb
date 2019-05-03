class PlaylistSong < ApplicationRecord
    validates :song_id, :playlist_id, presence: true
end
