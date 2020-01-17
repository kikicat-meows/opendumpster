class Deletetable < ActiveRecord::Migration[5.2]
  def change
    drop_table :restaurant_timeslot_capacities
  end
end
