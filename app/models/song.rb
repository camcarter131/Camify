class Song < ApplicationRecord
    validates :name, :album_id, :duration, presence: true
end
 