# == Schema Information
#
# Table name: restaurant_timeslot_capacities
#
#  id            :bigint           not null, primary key
#  capacity      :integer          default(20), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#  timeslot_id   :integer          not null
#
# Indexes
#
#  index_restaurant_timeslot_capacities_on_restaurant_id  (restaurant_id)
#  index_restaurant_timeslot_capacities_on_timeslot_id    (timeslot_id)
#

class RestaurantTimeslotCapacity < ApplicationRecord
    validates_uniqueness_of :restaurant_id, scope: :timeslot_id

    belongs_to :timeslot, inverse_of: :restaurant_timeslot_capacities
    belongs_to :restaurant, inverse_of: :restaurant_timeslot_capacities

    has_many :reservations, inverse_of: :restaurant_timeslot_capacity

end
