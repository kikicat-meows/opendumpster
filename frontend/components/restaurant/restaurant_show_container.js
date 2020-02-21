import { connect } from 'react-redux';
import {
    requestARestaurant
} from '../../actions/restaurant_actions';
import {
    clearTimeslots
} from '../../actions/timeslot_actions';
import {
    getRestaurantReviews
} from '../../actions/review_actions';
import { clearReservationErrors } from "../../actions/reservation_actions";

import RestaurantShow from './restaurant_show';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
});


const mDTP = dispatch => ({
    requestARestaurant: (id) => 
    dispatch(requestARestaurant(id)),
    clearTimeslots: () => dispatch(clearTimeslots()),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
    getRestaurantReviews: id => dispatch(getRestaurantReviews(id)),
});


export default connect(mSTP, mDTP)(RestaurantShow);