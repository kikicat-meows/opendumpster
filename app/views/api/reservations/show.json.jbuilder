json.id @reservation.id
json.user_id @reservation.user_id
json.restaurant_id @reservation.restaurant_id
json.restaurant @reservation.restaurant.name
json.date @reservation.date
json.time @reservation.timeslot.time
json.seats @reservation.seats
json.cancellation @reservation.cancellation