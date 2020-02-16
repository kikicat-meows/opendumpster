import * as TimeslotAPIUtil from '../util/timeslot_api_util';


export const RECEIVE_TIMESLOTS = 'RECEIVE_TIMESLOTS';
export const CLEAR_TIMESLOTS = 'CLEAR_TIMESLOTS';

const receiveTimeslots = timeslots => ({
    type: RECEIVE_TIMESLOTS,
    timeslots
});

export const clearTimeslots = () => ({
    type: CLEAR_TIMESLOTS
});

export const getTimeslotsForRestaurant = request => dispatch => (
    TimeslotAPIUtil.fetchTimeslotsForRestaurant(request)
        .then(timeslots => dispatch(receiveTimeslots(timeslots)))
);