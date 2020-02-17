import {
    RECEIVE_RESERVATION,
    RECEIVE_RES_ERRORS,
    CLEAR_RES_ERRORS
} from '../actions/reservation_actions';

const reservationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_RES_ERRORS:
            return action.errors;
        
        case RECEIVE_RESERVATION:
            return [];

        case CLEAR_RES_ERRORS:
            return [];
    
        default:
            return state;
    }
}

export default reservationErrorsReducer;