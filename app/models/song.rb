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
end
 
 