class CreateRestaurantTimeslotCapacities < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_timeslot_capacities do |t|
      t.integer :restaurant_id, null: false
      t.integer :timeslot_id, null: false
      t.integer :capacity, null: false
      t.timestamps
    end

    add_index :restaurant_timeslot_capacities, :timeslot_id
  end
end
