import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

                  
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import { 
    createReservation
 } from '../../actions/reservation_actions';


import BookReservationForm from './book_reservation_form';

const mSTP = ({ session, entities: { users, restaurants }, search }, ownProps) => {
    // debugger;
    const params = new URLSearchParams(ownProps.history.location.search);
    let restaurantId = params.get('restaurantId');
    
    return {
        reservationForm: {
            user_id: session.id,
            date: params.get('date'),
            seats: params.get('seats'),
            restaurant_id: restaurantId,
            timeslot_id: params.get('timeslotId'),
        },
        time: params.get('time'),
        restaurant: restaurants[restaurantId],
    }
}

const mDTP = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    requestARestaurant: id => dispatch(requestARestaurant(id)),
})

export default withRouter(connect(mSTP, mDTP)(BookReservationForm));