import { connect } from 'react-redux';
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import {
    clearTimeslots
} from '../../actions/timeslot_actions';
import { clearReservationErrors } from "../../actions/reservation_actions";

import RestaurantShow from './restaurant_show';


const mSTP = (state, ownProps) => ({
    currentUser: currentUser(state),
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
});


const mDTP = dispatch => ({
    requestARestaurant: (id) => 
                dispatch(requestARestaurant(id)),
    clearTimeslots: () => dispatch(clearTimeslots()),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
});


export default connect(mSTP, mDTP)(RestaurantShow);