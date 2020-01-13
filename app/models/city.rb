# == Schema Information
#
# Table name: cities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_cities_on_name  (name)
#

class City < ApplicationRecord
    validates :name, presence: true

    has_many :restaurants, inverse_of: :city

    def restaurant_count
        self.restaurants.length
    end

end
