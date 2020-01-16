class FixColumnsOnReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :restaurant_id
    remove_column :reservations, :timeslot_id
    add_column :reservations, :restaurant_timeslot_capacity_id, :integer, null: false
    add_index :reservations, :restaurant_timeslot_capacity_id
  end
end
