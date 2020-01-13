import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";
export const LOADING_RESTAURANT = "LOADING_RESTAURANT";
export const LOADING_RESTAURANTS = "LOADING_RESTAURANTS";


export const receiveRestaurants = (restaurants) => {
    return {
        type: RECEIVE_RESTAURANTS,
        restaurants,
    };
};

export const receiveRestaurant = (restaurant) => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant,
    };
};

export const receiveRestaurantErrors = (errors) => {
    return {
        type: RECEIVE_RESTAURANT_ERRORS,
        errors
    };
};

export const loadingRestaurant = () => {
    return {
        type: LOADING_RESTAURANT,
    };
};

export const loadingRestaurants = () => {
    return {
        type: LOADING_RESTAURANTS,
    };
};




export const searchRestaurants = searchTerm => dispatch => {
    return RestaurantAPIUtil.fetchSearchRestaurants(searchTerm).then(response => dispatch(receiveRestaurants(response)), err => dispatch(receiveRestaurantErrors(err.responseJSON)));
};

export const requestRestaurant = (id) => dispatch => {
    return RestaurantApiUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant)));
};