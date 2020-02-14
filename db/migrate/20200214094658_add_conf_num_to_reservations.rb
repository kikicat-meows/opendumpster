class AddConfNumToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :confirm, :integer, null: false
    add_index :reservations, :confirm, unique: true
  end
end
