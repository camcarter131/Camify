# == Schema Information
#
# Table name: artists
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ApplicationRecord 
    validates :name, presence: true

    has_many :albums
    has_one_attached :photo
    has_one_attached :index_photo
end
 