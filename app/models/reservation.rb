# == Schema Information
#
# Table name: reservations
#
#  id                              :bigint           not null, primary key
#  cancellation                    :boolean          default(FALSE), not null
#  date                            :date             not null
#  seats                           :integer          not null
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  restaurant_timeslot_capacity_id :integer          not null
#  user_id                         :integer          not null
#
# Indexes
#
#  index_reservations_on_restaurant_timeslot_capacity_id  (restaurant_timeslot_capacity_id)
#  index_reservations_on_user_id                          (user_id)
#

class Reservation < ApplicationRecord

    belongs_to :user, inverse_of: :reservations

    belongs_to :restaurant_timeslot_capacity, inverse_of: :reservations
    has_one :restaurant, through: :restaurant_timeslot_capacity, source: :restaurant
    has_one :timeslot, through: :restaurant_timeslot_capacity, source: :timeslot
    
end
