# == Schema Information
#
# Table name: cuisines
#
#  id            :bigint           not null, primary key
#  type          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#
# Indexes
#
#  index_cuisines_on_restaurant_id  (restaurant_id)
#  index_cuisines_on_type           (type)
#

class Cuisine < ApplicationRecord
    validates :type, presence: true

    belongs_to :restaurant, inverse_of: :cuisines
end
