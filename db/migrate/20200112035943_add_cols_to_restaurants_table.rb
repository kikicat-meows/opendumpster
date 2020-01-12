class AddColsToRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :address, :string, null: false
    add_column :restaurants, :phone, :string, null: false
    add_column :restaurants, :website, :string
    add_column :restaurants, :description, :text
  end
end
