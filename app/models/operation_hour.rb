# == Schema Information
#
# Table name: operation_hours
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
#  index_operation_hours_on_restaurant_id  (restaurant_id)
#  index_operation_hours_on_timeslot_id    (timeslot_id)
#

class OperationHour < ApplicationRecord
    validates :capacity, presence: true

    belongs_to :restaurant, inverse_of: :operation_hours
    belongs_to :timeslot, inverse_of: :operation_hours

end
