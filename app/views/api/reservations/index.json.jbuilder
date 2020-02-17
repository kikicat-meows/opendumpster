json.cancelled @reservations['cancelled'] do |reservation|
    json.id reservation.id
    json.date reservation.date
    json.time reservation.timeslot.time
    json.restaurant reservation.restaurant.name
    json.restaurant_id reservation.restaurant_id
    json.seats reservation.seats
    json.confNum reservation.confirm
    json.cancellation reservation.cancellation
end
json.upcoming @reservations['upcoming'] do |reservation|
    json.id reservation.id
    json.date reservation.date
    json.time reservation.timeslot.time
    json.restaurant reservation.restaurant.name
    json.restaurant_id reservation.restaurant_id
    json.seats reservation.seats
    json.confNum reservation.confirm
    json.cancellation reservation.cancellation
end
json.past @reservations['past'] do |reservation|
    json.id reservation.id
    json.date reservation.date
    json.time reservation.timeslot.time
    json.restaurant reservation.restaurant.name
    json.restaurant_id reservation.restaurant_id
    json.seats reservation.seats
    json.confNum reservation.confirm
    json.cancellation reservation.cancellation
end