class FixCuisinesName < ActiveRecord::Migration[5.2]
  def change
    remove_column :cuisines, :type
    add_column :cuisines, :name, :string, null: false
    add_index :cuisines, :name
  end
end
