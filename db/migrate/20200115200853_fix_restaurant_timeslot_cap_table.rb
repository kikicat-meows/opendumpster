class FixRestaurantTimeslotCapTable < ActiveRecord::Migration[5.2]
  def change
    add_index :restaurant_timeslot_capacities, :restaurant_id
  end
end
