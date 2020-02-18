class AddIndexToReservationsRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_index :reservations, :restaurant_id
  end
end
