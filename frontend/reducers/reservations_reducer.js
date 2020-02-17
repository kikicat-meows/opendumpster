import { 
    RECEIVE_RESERVATION, RECEIVE_USER_RESERVATIONS 
} from '../actions/reservation_actions';
import {
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";


const _nullReservation = Object.freeze({
    user: null,
    new: {}
})


const reservationsReducer = (state = _nullReservation, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RESERVATION:
            nextState.new[action.reservation.id] = action.reservation;            
            return nextState;
        
        case RECEIVE_USER_RESERVATIONS:
            nextState.user = action.reservations;
            return nextState;

        case LOGOUT_CURRENT_USER:
            return _nullReservation;

        default:
            return state;
    }
}

export default reservationsReducer;