class ChangeCityonRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :city
    add_column :restaurants, :city_id, :integer, null: false
  end

end
