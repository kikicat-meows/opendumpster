import { 
    RECEIVE_TIMESLOTS, CLEAR_TIMESLOTS 
} from '../actions/timeslot_actions';

const timeslotsReducer = (state = null, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TIMESLOTS:
            return action.timeslots["timeslots"];

        case CLEAR_TIMESLOTS:
            return null;

        default: 
            return state;
    }
}

export default timeslotsReducer;