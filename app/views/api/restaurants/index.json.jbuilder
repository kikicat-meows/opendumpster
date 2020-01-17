
@available_restaurants.each do |restaurant_timeslot|
    json.set! restaurant_timeslot.first.id do
        json.id restaurant_timeslot.first.id
        json.name restaurant_timeslot.first.name
        json.city restaurant_timeslot.first.city.name
        json.cuisine restaurant_timeslot.first.map_cuisine_by_name
        json.available_timeslots restaurant_timeslot[1], :id, :day, :time
    end
end
