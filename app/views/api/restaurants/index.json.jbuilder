
@available_restaurants.each do |restaurant_timeslot|
    json.set! restaurant_timeslot.first.id do
        json.id restaurant_timeslot.first.id
        json.name restaurant_timeslot.first.name
        json.city restaurant_timeslot.first.city.name
        json.cuisine restaurant_timeslot.first.map_cuisine_by_name
        json.avg_rating restaurant_timeslot.first.avg_rating
        json.num_reviews restaurant_timeslot.first.num_reviews
        json.available_timeslots(restaurant_timeslot[1]) do |timeslot|
            if timeslot != "none"
                json.extract! timeslot, :id, :day, :time
            else
                json.id "none"
            end
        end
    end
end
