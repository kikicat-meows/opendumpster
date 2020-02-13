import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as APIUtil from './util/session_api_util';
import * as RestaurantAPIUtil from './util/restaurant_api_util';
import * as ReservationAPIUtil from './util/reservation_api_util';
import * as ReservationActions from './actions/reservation_actions';
import * as RestaurantActions from './actions/restaurant_actions';

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
    window.fetchRestaurants = RestaurantAPIUtil.fetchRestaurants;
    window.fetchARestaurant = RestaurantAPIUtil.fetchARestaurant;
    window.fetchAReservation = ReservationAPIUtil.fetchAReservation;
    window.createReservation = ReservationAPIUtil.createReservation;
    window.getAReservation = ReservationActions.findAReservation;
    window.requestARestaurant = RestaurantActions.requestARestaurant;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
})