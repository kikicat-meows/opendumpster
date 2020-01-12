class CreateOperationHours < ActiveRecord::Migration[5.2]
  def change
    create_table :operation_hours do |t|
      t.integer :restaurant_id, null: false
      t.integer :timeslot_id, null: false
      t.timestamps
    end

    add_index :operation_hours, :restaurant_id
    add_index :operation_hours, :timeslot_id
  end
end
