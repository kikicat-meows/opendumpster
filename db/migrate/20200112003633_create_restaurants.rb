class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :city
  end
end
