import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_RESTAURANT_REVIEWS = 'RECEIVE_RESTAURANT_REVIEWS';
export const RECEIVE_USER_REVIEWS = 'RECEIVE_USER_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const RECEIVE_REV_ERRORS = 'RECEIVE_RES_ERRORS';
export const CLEAR_REV_ERRORS = 'CLEAR_REV_ERRORS';


const receiveRestaurantReviews = reviews => ({
    type: RECEIVE_RESTAURANT_REVIEWS,
    reviews
});

const receiveUserReviews = reviews => ({
    type: RECEIVE_USER_REVIEWS,
    reviews
});

const receiveAReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REV_ERRORS,
    errors
});

export const clearReviewErrors = () => ({
    type: CLEAR_REV_ERRORS
});


export const getRestaurantReviews = restaurantId => dispatch => (
    ReviewAPIUtil.fetchRestaurantReviews(restaurantId)
        .then(reviews => dispatch(receiveRestaurantReviews(reviews)))
);

export const getUserReviews = userId => dispatch => (
    ReviewAPIUtil.fetchUserReviews(userId)
        .then(reviews => dispatch(receiveUserReviews(reviews)))
);

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveAReview(review)))
        .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const updateReview = review => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveAReview(review)))
        .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const deleteReview = reviewId => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
        .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
);
