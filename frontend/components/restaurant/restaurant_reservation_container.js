import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    receiveSearch
} from '../../actions/search_actions';
import {
    getTimeslotsForRestaurant
} from '../../actions/timeslot_actions';
import {
    openModal
} from '../../actions/modal_actions';

import RestaurantReservation from './restaurant_reservation';

const mSTP = (state, ownProps) => ({
    search: state.search,
    currentUser: state.entities.users[state.session.id],
    timeslots: state.entities.timeslots,
    restaurant_id: ownProps.match.params.restaurantId
});

const mDTP = dispatch => ({
    getTimeslotsForRestaurant: request => dispatch(getTimeslotsForRestaurant(request)),
    openModal: ctx => dispatch(openModal(ctx)),
    receiveSearch: search => dispatch(receiveSearch(search)),
});

export default withRouter(connect(mSTP, mDTP)(RestaurantReservation));