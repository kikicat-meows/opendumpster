import { connect } from 'react-redux';
import { getUserReservations } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';

import UserReservations from './user_reservations';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    reservations: state.entities.reservations.user,
});

const mDTP = dispatch => ({
    getUserReservations: userId => dispatch(getUserReservations(userId)),
    openModal: ctx => dispatch(openModal(ctx))
});

export default connect(mSTP, mDTP)(UserReservations);