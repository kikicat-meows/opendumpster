# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  cancellation  :boolean          default(FALSE), not null
#  date          :date             not null
#  seats         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#  timeslot_id   :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_reservations_on_user_id  (user_id)
#

class Reservation < ApplicationRecord
    validates :date, :seats, presence: true

    belongs_to :user, inverse_of: :reservations
    belongs_to :restaurant, inverse_of: :reservations
    belongs_to :timeslot, inverse_of: :reservations
    
    def self.is_valid?(reservation)
        restaurant = Restaurant.find_by(id: reservation.restaurant_id)
        restaurant.available_seats(reservation.date, 
            reservation.timeslot_id) >= reservation.seats
    end
    
end
