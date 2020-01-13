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

require 'test_helper'

class TimeslotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
