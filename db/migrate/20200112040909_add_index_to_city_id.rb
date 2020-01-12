class AddIndexToCityId < ActiveRecord::Migration[5.2]
  def change
    add_index :restaurants, :city_id
  end
end
