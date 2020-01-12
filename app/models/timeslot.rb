# == Schema Information
#
# Table name: timeslots
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  time       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_timeslots_on_day  (day)
#

class Timeslot < ApplicationRecord
    validates :day, :time, presence: true

    has_many :operation_hours, inverse_of: :timeslot

end
