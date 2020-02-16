import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { 
    findAReservation, updateReservation 
} from '../../actions/reservation_actions';
import {
    openModal
} from '../../actions/modal_actions';

import ConfirmReservationUpdate from "./confirm_reservation_update";

const mSTP = (
  { session, entities: { reservations } },
  ownProps
) => {
  const params = new URLSearchParams(ownProps.history.location.search);
  let reservationId = params.get("reservationId");
  console.log(params.get('timeslotId'));
  return {
    currentUser: session.id,
    reservationId: reservationId,
    reservation: reservations[reservationId],
    reservationForm: {
      date: params.get("date"),
      seats: params.get("seats"),
      timeslot_id: params.get("timeslotId"),
    },
    time: params.get("time"),
  };
};

const mDTP = dispatch => ({
  findAReservation: id => dispatch(findAReservation(id)),
  updateReservation: reservation => dispatch(updateReservation(reservation)),
  openModal: ctx => dispatch(openModal(ctx)),
});

export default withRouter(connect(mSTP, mDTP)(ConfirmReservationUpdate));
