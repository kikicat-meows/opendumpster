export const fetchAllRestaurants = () => (
    $.ajax({
        method: 'GET',
        url: '/api/restaurants',
    })
)


export const fetchRestaurants = (searchTerm) => (
    $.ajax({
        method: 'GET',
        url: '/api/restaurants',
        data: { searchTerm },
    })
);


export const fetchARestaurant = (restaurantId) => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantId}`,
    })
);