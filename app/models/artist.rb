class Artist < ApplicationRecord 
    validates :name, presence: true
end
