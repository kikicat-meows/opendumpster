import { connect } from 'react-redux';

import {
    getTimeslotsForRestaurant
} from '../../actions/timeslot_actions';

import EditReservationForm from './edit_reservation_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    currentUser: state.session.id,
    timeslots: state.entities.timeslots,
})

const mDTP = dispatch => ({
    getTimeslotsForRestaurant: request => dispatch(getTimeslotsForRestaurant(request)),
})

export default withRouter(connect(mSTP, mDTP)(EditReservationForm));
