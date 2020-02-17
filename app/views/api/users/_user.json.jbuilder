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