export const fetchTimeslotsForRestaurant = search => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${search.restaurant_id}/timeslots`,
        data: { search }
    })
)