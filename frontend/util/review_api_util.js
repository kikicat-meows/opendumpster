export const fetchRestaurantReviews = restaurantId => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantId}/reviews`,
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    })
);

export const updateReview = input => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${input.id}`,
        data: { input },
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`,
    })
);

