class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :timeslot_id, null: false
      t.date :date, null: false
      t.integer :seats, null: false
      t.boolean :cancellation, null: false, default: false
      t.timestamps
    end

    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
    add_index :reservations, :timeslot_id
  end
end
