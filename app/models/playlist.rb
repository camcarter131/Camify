class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true
end
