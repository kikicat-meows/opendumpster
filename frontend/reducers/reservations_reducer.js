import { RECEIVE_RESERVATION } from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation;            
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;