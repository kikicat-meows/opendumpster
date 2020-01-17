class AddDefaultCapacity < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurant_timeslot_capacities, :capacity
    add_column :restaurant_timeslot_capacities, :capacity, :integer, null: false, default: 20
  end
end
