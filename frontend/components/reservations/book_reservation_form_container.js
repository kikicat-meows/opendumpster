import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

                  
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import { 
    createReservation, clearReservationErrors
 } from '../../actions/reservation_actions';
import {
    openModal
} from '../../actions/modal_actions';

import BookReservationForm from './book_reservation_form';

const mSTP = ({ session, entities: { users, restaurants }, errors }, ownProps) => {
    const params = new URLSearchParams(ownProps.history.location.search);
    let restaurantId = params.get('restaurantId');
    
    return {
        currentUser: users[session.id],
        reservationForm: {
            user_id: session.id,
            date: params.get('date'),
            seats: params.get('seats'),
            restaurant_id: restaurantId,
            timeslot_id: params.get('timeslotId'),
        },
        time: params.get('time'),
        restaurant: restaurants[restaurantId],
        errors: errors.reservation,
    }
}

const mDTP = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    requestARestaurant: id => dispatch(requestARestaurant(id)),
    openModal: ctx => dispatch(openModal(ctx)),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
})

export default withRouter(connect(mSTP, mDTP)(BookReservationForm));