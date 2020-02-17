import { connect } from 'react-redux';


import {
    findAReservation
} from '../../actions/reservation_actions';
import {
    openModal
} from '../../actions/modal_actions';
import {
    clearTimeslots
} from '../../actions/timeslot_actions'


import ReservationShow from './reservation_show';

const mSTP = ({session, entities: {reservations}}, ownProps) => ({
    reservation: reservations.new[ownProps.match.params.reservationId]
})

const mDTP = dispatch => ({
    findAReservation: id => dispatch(findAReservation(id)),
    openModal: ctx => dispatch(openModal(ctx)),
    clearTimeslots: () => dispatch(clearTimeslots()),
})



export default connect(mSTP, mDTP)(ReservationShow);