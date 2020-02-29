import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import timeslotsReducer from './timeslots_reducer';
import reviewsReducer from './reviews_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
    timeslots: timeslotsReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer,
});

export default entitiesReducer;