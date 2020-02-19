# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_favorites_on_user_id_and_restaurant_id  (user_id,restaurant_id) UNIQUE
#

require 'test_helper'

class FavoriteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
