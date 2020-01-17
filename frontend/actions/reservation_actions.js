import * as ReservationAPIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';

const receiveAReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});


export const createReservation = reservation => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveAReservation(reservation)))
)