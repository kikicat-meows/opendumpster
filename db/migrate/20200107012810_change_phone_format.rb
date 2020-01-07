class ChangePhoneFormat < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :phone
    add_column :users, :phone, :integer, null: false
  end
end
