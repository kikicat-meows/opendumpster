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

    has_many :cuisines, inverse_of: :restaurant, dependent: :destroy

    has_many :operation_hours, inverse_of: :restaurant, dependent: :destroy
    has_many :operation_timeslots, through: :operation_hours, source: :timeslot

    has_many :restaurant_timeslot_capacities, inverse_of: :restaurant, dependent: :destroy
    has_many :reservations, through: :restaurant_timeslot_capacities, source: :reservations


    def self.find_by_search(search_term)
        # restaurants = Restaurant.includes(:city).includes(:cuisines)

        res_city = Restaurant.joins(:city).where("lower(cities.name) like ?", "%#{search_term.downcase}%")
        res_name = Restaurant.where("lower(name) like ?", "%#{search_term.downcase}%")
        res_cuisine = Restaurant.joins(:cuisines).where("lower(cuisines.name) like ?", "%#{search_term.downcase}%")

        result = res_city + res_name + res_cuisine
    end

    def hours_of_operation
        timeslots = self.operation_hours.includes(:timeslot)
        opendays = Hash.new { |h, k| h[k] = [] }

        timeslots.each do |timeslot|
            opendays[timeslot.timeslot.day] << timeslot.timeslot.time
        end

        opendays
    end

    def open_close_hours
        opendays = self.hours_of_operation
        open_close = Hash.new {|h,k| h[k] = {} }

        opendays.each do |day, hours|
            value = { "open" => hours.min, "close" => hours.max }
            open_close[day] = value

        end

        open_close
    end

    def map_cuisine_by_name
        cuisines = self.cuisines

        names = cuisines.map { |cuisine| cuisine.name }

        names
    end

end


