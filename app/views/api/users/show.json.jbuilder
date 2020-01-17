json.partial! "api/users/user", user: @user

json.reservations do
    @user.reservations.each do |reservation|
        json.set! reservation.id do
            json.id reservation.id
            json.restaurant_id reservation.restaurant_id
            json.restaurant reservation.restaurant.name
            json.date reservation.date
            json.time reservation.timeslot.time
            json.seats reservation.seats
            json.cancellation reservation.cancellation
        end
    end
end