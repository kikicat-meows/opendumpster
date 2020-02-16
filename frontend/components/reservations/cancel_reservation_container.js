import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
    cancelReservation, findAReservation 
} from '../../actions/reservation_actions';
import { closeModal } from '../../actions/modal_actions';

import CancelReservation from './cancel_reservation';

const mSTP = (state) => ({
    currentUser: state.session.id,
})

const mDTP = dispatch => ({
    findAReservation: id => dispatch(findAReservation(id)),
    cancelReservation: id => dispatch(cancelReservation(id)),
    closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(CancelReservation));

