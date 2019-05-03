class Album < ApplicationRecord
    validates :name, :artist_id, :release_year, presence: true
end
 