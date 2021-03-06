class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :rating, null: false
      t.text :comment
      t.timestamps
    end

    add_index :reviews, [:user_id, :restaurant_id], unique: true
    add_index :reviews, :restaurant_id
  end
end
