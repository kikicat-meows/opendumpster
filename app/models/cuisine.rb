# == Schema Information
#
# Table name: cuisines
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#
# Indexes
#
#  index_cuisines_on_name           (name)
#  index_cuisines_on_restaurant_id  (restaurant_id)
#

class Cuisine < ApplicationRecord
    validates :name, presence: true

    belongs_to :restaurant, inverse_of: :cuisines


end
