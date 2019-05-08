# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint(8)        not null, primary key
#  song_id     :integer
#  playlist_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord
    validates :song_id, :playlist_id, presence: true

    belongs_to :song 

    belongs_to :playlist
end
 