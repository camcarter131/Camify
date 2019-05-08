# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true

    has_many :playlist_songs

    has_many :songs,
    through: :playlist_songs,
    source: :song
end
 