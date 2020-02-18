# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  cancellation  :boolean          default(FALSE), not null
#  confirm       :integer          not null
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
#  index_reservations_on_confirm        (confirm) UNIQUE
#  index_reservations_on_restaurant_id  (restaurant_id)
#  index_reservations_on_user_id        (user_id)
#

class Reservation < ApplicationRecord
    validates :date, :seats, presence: true
    validates :cancellation, inclusion: { in: [true, false] }
    validate :cannot_book_capacity_full
    after_initialize :generate_confirmation_number

    belongs_to :user, inverse_of: :reservations
    belongs_to :restaurant, inverse_of: :reservations
    belongs_to :timeslot, inverse_of: :reservations

    def cannot_book_capacity_full
        if !Reservation.is_valid?(self)
            errors[:seats] << 'are no longer available.'
        end
    end
    
    def self.is_valid?(reservation)
        restaurant = Restaurant.find_by(id: reservation.restaurant_id)
        restaurant.available_seats(reservation.date, 
            reservation.timeslot_id) >= reservation.seats
    end

    def generate_confirmation_number
        conf_num = rand(10**4..10**5-1)

        if !Reservation.find_by(confirm: conf_num)
            self.confirm ||= conf_num
        else
            self.generate_confirmation_number
        end

        self.confirm
    end

end
