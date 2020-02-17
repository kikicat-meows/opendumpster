import * as ReservationAPIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_USER_RESERVATIONS = 'RECEIVE_USER_RESERVATIONS';

export const RECEIVE_RES_ERRORS = 'RECEIVE_RES_ERRORS';
export const CLEAR_RES_ERRORS = 'CLEAR_RES_ERRORS';


const receiveAReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

const receiveUserReservations = reservations => ({
    type: RECEIVE_USER_RESERVATIONS,
    reservations
});

export const receiveReservationErrors = errors => ({
    type: RECEIVE_RES_ERRORS,
    errors
});

export const clearReservationErrors = () => ({
    type: CLEAR_RES_ERRORS
});


export const getUserReservations = userId => dispatch => (
    ReservationAPIUtil.fetchUserReservations(userId)
        .then(reservations => dispatch(receiveUserReservations(reservations)))
);

export const createReservation = reservation => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveAReservation(reservation)))
        .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const findAReservation = id => dispatch => (
    ReservationAPIUtil.fetchAReservation(id)
        .then(reservation => dispatch(receiveAReservation(reservation)))
        .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const cancelReservation = id => dispatch => (
    ReservationAPIUtil.updateReservation({reservationId: id, reservation: {cancellation: true}})
        .then(reservation => dispatch(receiveAReservation(reservation)))
        .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const updateReservation = reservation => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveAReservation(reservation)))
        .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);