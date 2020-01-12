class CreateCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :cuisines do |t|
      t.string :type, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end

    add_index :cuisines, :type
    add_index :cuisines, :restaurant_id
  end
end
