export const fetchUserFavoriteRestaurants = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/favorites`,
    })
)

export const createNewFavorite = favorite => (
    $.ajax({
        method: 'POST',
        url: `/api/favorites`,
        data: { favorite }
    })
)

export const deleteFavorite = favoriteId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${favoriteId}`
    })
)