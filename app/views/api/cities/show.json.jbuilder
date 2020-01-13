# json.set! @city.id do
#     json.extract! @city,
#         :id,
#         :name,
#         :restaurant_ids
# end

# json.restaurants do 
#     @city.restaurants.each do |restaurant|
#         json.set! restaurant.id do
#             json.extract! restaurant,
#                 :id,
#                 :name,
#                 :address,
#                 :phone,
#                 :website,
#                 :city_id,
#                 :cuisine_ids,
#                 :operation_hour_ids
#         end
#     end
# end

@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.id restaurant.id
        json.name restaurant.name
        json.city restaurant.city.name
        json.cuisine restaurant.map_cuisine_by_name
    end
end