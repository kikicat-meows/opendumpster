import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
    createReservation
 } from '../../actions/reservation_actions';


import BookReservationForm from './book_reservation_form';

const mSTP = ({ session, entities: { users, restaurants }, search }) => {
    const params = new URLSearchParams(document.location.search.substring(4));
    const restaurantId = new URLSearchParams(location.search).get('restaurantId');
    // let restaurantId = params.get('restaurantId');
    
    return {
        reservationForm: {
            user_id: session.id,
            date: search.date,
            seats: search.seats,
            restaurant_id: search.restaurant_id,
            timeslot_id: search.timeslot_id,
        },
        time: new URLSearchParams(location.search).get('time'),
        restaurant: restaurants[search.restaurant_id],
        params: params.get('timeslotId')
    }
}

const mDTP = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
})

export default withRouter(connect(mSTP, mDTP)(BookReservationForm));