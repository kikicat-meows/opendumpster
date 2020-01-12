# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  description :text
#  name        :string           not null
#  phone       :string           not null
#  website     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city_id     :integer          not null
#
# Indexes
#
#  index_restaurants_on_city_id  (city_id)
#  index_restaurants_on_name     (name)
#

class Restaurant < ApplicationRecord
    validates :name, :address, :phone, presence: true

    belongs_to :city, inverse_of: :restaurants

    has_many :cuisines, inverse_of: :restaurant

    has_many :operation_hours, inverse_of: :restaurant
    has_many :operation_timeslots, through: :operation_hours, source: :timeslot


    def self.find_by_search(search_term)
        restaurants = Restaurant.includes(:city).includes(:cuisines)

        result_city = Restaurant.joins(:city).where("lower(cities.name) like ?", "%#{search_term.downcase}%")
        result_name = Restaurant.where("lower(name) like ?", "%#{search_term.downcase}%")
        result_cuisine = Restaurant.joins(:cuisines).where("lower(cuisines.type like ?", "%#{search_term.downcase}%")

        result = result_city + result_name + result_cuisine
    end

end


