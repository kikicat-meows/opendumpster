class AddCapacityToOh < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :restaurant_timeslot_capacity_id

    add_column :operation_hours, :capacity, :integer, null: false, default: 20
  end
end
