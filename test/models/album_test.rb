# == Schema Information
#
# Table name: albums
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  artist_id    :integer          not null
#  release_year :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
