@favorite_restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.id restaurant.id
        json.name restaurant.name
        # json.address restaurant.address
        # json.phone restaurant.phone
        # json.website restaurant.website
        # json.description restaurant.description
        json.city restaurant.city.name
        json.cuisine restaurant.map_cuisine_by_name
        json.avg_rating restaurant.avg_rating
        # json.num_reviews restaurant.num_reviews
    end

end