# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  comment       :text
#  rating        :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_reviews_on_restaurant_id              (restaurant_id)
#  index_reviews_on_user_id_and_restaurant_id  (user_id,restaurant_id) UNIQUE
#

class Review < ApplicationRecord
    validates :rating, presence: true
    validates :rating, numericality: { greater_than: 0, less_than_or_equal_to: 5 }
    validates_uniqueness_of :user_id, scope: :restaurant_id

    belongs_to :restaurant, inverse_of: :reviews

    belongs_to :user, inverse_of: :reviews

end
