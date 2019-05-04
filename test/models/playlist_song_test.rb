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

require 'test_helper'

class PlaylistSongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
