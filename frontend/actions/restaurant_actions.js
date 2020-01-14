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

export const receiveARestaurant = (restaurant) => {
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

// export const loadingRestaurant = () => {
//     return {
//         type: LOADING_RESTAURANT,
//     };
// };

// export const loadingRestaurants = () => {
//     return {
//         type: LOADING_RESTAURANTS,
//     };
// };




export const requestAllRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchAllRestaurants()
        .then(
            restaurants => dispatch(receiveRestaurants(restaurants))
            )
};

export const requestARestaurant = id => dispatch => {
    return RestaurantAPIUtil.fetchARestaurant(id)
        .then(
            restaurant => dispatch(receiveARestaurant(restaurant))
        );
};


export const searchRestaurants = searchTerm => dispatch => {
    return RestaurantAPIUtil.fetchRestaurants(searchTerm)
        .then(
            response => dispatch(receiveRestaurants(response))
        );
};

