class CreateTimeslots < ActiveRecord::Migration[5.2]
  def change
    create_table :timeslots do |t|
      t.string :day, null: false
      t.integer :time, null: false
      t.timestamps
    end

    add_index :timeslots, :day
  end
end
