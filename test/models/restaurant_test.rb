# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  description :text
#  name        :string           not null
#  phone       :string           not null
#  website     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city_id     :integer          not null
#
# Indexes
#
#  index_restaurants_on_city_id  (city_id)
#  index_restaurants_on_name     (name)
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
