import { connect } from 'react-redux';


import {
    findAReservation
} from '../../actions/reservation_actions';


import ReservationShow from './reservation_show';

const mSTP = ({session, entities: {reservations}}, ownProps) => ({
    reservation: reservations[ownProps.match.params.reservationId]
})

const mDTP = dispatch => ({
    findAReservation: id => dispatch(findAReservation(id)),
})



export default connect(mSTP, mDTP)(ReservationShow);