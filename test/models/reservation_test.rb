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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
