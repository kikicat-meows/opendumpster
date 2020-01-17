export const fetchAllRestaurants = () => (
    $.ajax({
        method: 'GET',
        url: '/api/restaurants',
    })
)


export const fetchRestaurants = (search) => (
    $.ajax({
        method: 'GET',
        url: '/api/restaurants',
        data: { search },
    })
);


export const fetchARestaurant = (restaurantId) => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantId}`,
    })
);