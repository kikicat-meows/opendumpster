class FixNamefields < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
  end
end
