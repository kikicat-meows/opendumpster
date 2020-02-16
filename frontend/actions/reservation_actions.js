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

export const findAReservation = id => dispatch => (
    ReservationAPIUtil.fetchAReservation(id)
        .then(reservation => dispatch(receiveAReservation(reservation)))
);

export const cancelReservation = id => dispatch => (
    ReservationAPIUtil.updateReservation({reservationId: id, reservation: {cancellation: true}})
        .then(reservation => dispatch(receiveAReservation(reservation)))
)

export const updateReservation = reservation => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveAReservation(reservation)))
);