
@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.id restaurant.id
        json.name restaurant.name
        json.city restaurant.city.name
        json.cuisine restaurant.map_cuisine_by_name
    end
end