# == Schema Information
#
# Table name: timeslots
#
#  id         :bigint           not null, primary key
#  day        :string           not null
#  time       :float            not null
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
    has_many :reservations, inverse_of: :timeslot

    def self.generate_search_time_range(request_time)
        hour_before = request_time - 1
        half_before = request_time - 0.5
        half_after = request_time + 0.5
        hour_after = request_time + 1
        [hour_before, half_before, request_time, half_after, hour_after]
    end

    def self.generate_searching_timeslots(time, day)
        time_range = Timeslot.generate_search_time_range(time)
        
        Timeslot.where("time IN (?) and day = ?", time_range, day)
    end

    def self.find_timeslot_ids_by_day(day)
        timeslots = Timeslot.where(day: day)

        ids = timeslots.map { |el| el.id }
    end

end
