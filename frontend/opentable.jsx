import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as APIUtil from './util/session_api_util';
import * as ReservationActions from './actions/reservation_actions';
import * as TimeslotActions from './actions/timeslot_actions';
import * as ReviewActions from './actions/review_actions';
import * as FavoriteActions from './actions/favorite_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    // testing area, remove after development
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = APIUtil.login;
    window.getTimeslotsForRestaurant = TimeslotActions.getTimeslotsForRestaurant;
    window.cancelReservation = ReservationActions.cancelReservation;
    window.updateReservation = ReservationActions.updateReservation;
    window.getUserReservations = ReservationActions.getUserReservations;
    window.getRestaurantReviews = ReviewActions.getRestaurantReviews;
    window.deleteReview = ReviewActions.deleteReview;
    window.createNewFavorite = FavoriteActions.createNewFavorite;
    window.deleteFavorite = FavoriteActions.deleteFavorite;
    window.requestUserFavorites = FavoriteActions.requestUserFavorites;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
})