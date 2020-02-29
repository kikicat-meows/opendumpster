# json.extract! user, 
#     :id, 
#     :email, 
#     :fname, 
#     :lname

json.id user.id
json.email user.email
json.fname user.fname
json.lname user.lname
json.visited_restaurant_ids user.visited_restaurants
json.reviews_count user.reviews.count
json.favorites user.favorites.each do |favorite|
    # json.set! favorite.id do
        json.extract! favorite, :id, :restaurant_id
    # end 
end