import React from 'react';

import {
    formatOpeningTime
} from '../../util/format_time_util';
import {
    formatDateShort
} from '../../util/format_date_util';

import {
    selectTimeslots, selectNumOfSeats
} from '../../util/reservation_search_util';

class EditReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.reservation.date,
            time: this.props.reservation.time,
            seats: this.props.reservation.seats,
            restaurant_id: this.props.reservation.restaurant_id,
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.update = this.update.bind(this);
        this.changeReservation = this.changeReservation.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        this.props.getTimeslotsForRestaurant(this.state);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    changeReservation(timeslotId) {
        return e => {
            e.preventDefault();
            if (!this.props.currentUser) {
                this.props.openModal('login');
                return;
            }

            if (this.props.currentUser.id !== this.props.reservation.user_id) {
                this.props.history.push('/denied');
            } else {
                this.props.history.push({
                    pathname: '/reservations/change',
                    search: `reservationId=${this.props.reservation.id}&seats=${this.state.seats}&date=${this.state.date}&timeslotId=${timeslotId}&time=${e.target.value}`
                });
            }
        }
    }

    displayTimeslots() {
        let availableTimeslots;

        if (this.props.timeslots && this.props.timeslots.length === 0) {
            availableTimeslots = 
                <p>Sorry, there are no more reservations available on this date.</p>
        } else if (this.props.timeslots) {
            let timeslotsArray = [];

            for (let i = 0; i < this.props.timeslots.length; i++) {
                let timeslot = this.props.timeslots[i];

                if (timeslot.id !== 'none') {
                    timeslotsArray.push(
                      <button
                        className="modify-reservation-timeslots-button"
                        value={timeslot.time}
                        key={timeslot.id}
                        onClick={this.changeReservation(timeslot.id)}
                      >
                        {formatOpeningTime(timeslot.time)}
                      </button>
                    )
                } else {
                    timeslotsArray.push(
                      <button
                        className="modify-reservation-timeslots-disabled"
                        key={`disabled${i}`}
                        disabled
                      >
                        #:## ##
                      </button>
                    );
                }
            }

            availableTimeslots = 
                <div className='modify-reservation-timeslots-buttons'>
                    {timeslotsArray}
                </div>
        }

        return availableTimeslots;
    }

    displaySeatsGrammar(num) {
        let wordString;

        if (num > 1) {
            wordString = `${num} people`
        } else {
            wordString = `${num} person`
        }

        return wordString;
    }

    render() {
        return (
            <div className="modify-reservation-content hidden clearfix">
                <div className="modify-reservation-header">
                    <h3>Change Your Reservation</h3>
                    <a className='cancel-modify'
                        onClick={this.props.toggleEditForm}>
                        Cancel
                    </a>
                </div>
                <div className="modify-reservation-search-wrapper">
                    <form className="modify-reservation-search-bar"
                        onSubmit={this.handleSearch}>
                        <span className="modify-reservation-seats">
                            <a className='modify-reservation-label'>
                                {this.displaySeatsGrammar(this.state.seats)}
                            </a>
                            <select 
                                className="modify-reservation-seats-selector"
                                value={this.state.seats}
                                onChange={this.update('seats')}>
                                {selectNumOfSeats()}
                            </select>
                        </span>
                        <span className='modify-reservation-date'>
                            <a className="modify-reservation-label">
                                {formatDateShort(this.state.date)}
                            </a>
                            <input type="date" 
                                className="modify-reservation-date-selector"
                                value={this.state.date}
                                min={new Date().toISOString().substr(0, 10)}
                                onChange={this.update('date')}
                                required/>
                        </span>
                        <span className="modify-reservation-time">
                            <a className="modify-reservation-label">
                                {formatOpeningTime(this.state.time)}
                            </a>
                            <select 
                                className="modify-reservation-time-selector"
                                value={this.state.time}
                                onChange={this.update('time')}>
                                {selectTimeslots()}
                            </select>
                        </span>
                        <button className="modify-reservation-search-submit"
                            onChange={this.handleSearch}>
                            Find a Dumpster
                        </button>
                    </form>
                </div>
                <div className="modify-reservation-timeslots">
                    {this.displayTimeslots()}
                </div>
            </div>
        )
    }


}

export default EditReservationForm;