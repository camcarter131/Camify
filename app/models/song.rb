# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  album_id   :integer          not null
#  duration   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    validates :name, :album_id, :duration, presence: true

    belongs_to :album
 
    has_many :playlists,
    through: :playlist_song

    has_one_attached :song_file

end
 
 