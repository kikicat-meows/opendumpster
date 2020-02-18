import React from 'react';

import {
    formatOpeningTime
} from '../../util/format_time_util';

import {
    selectTimeslots, selectNumOfSeatsShow
} from '../../util/reservation_search_util';


class RestaurantReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.search.date,
            time: this.props.search.time,
            seats: this.props.search.seats,
            restaurant_id: this.props.restaurant_id
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeReservation = this.makeReservation.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    componentDidMount() {
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveSearch(this.state);
        this.props.getTimeslotsForRestaurant(this.state);

    };

    displayTimeslots() {
        let availableTimeslots;

        if (this.props.timeslots && this.props.timeslots.length === 0) {
            availableTimeslots =
                <p>Sorry, there are no more reservations available on this date. Please try again.</p>
        } else if (this.props.timeslots) {
            let timeslotsArray = [];

            for (let i = 0; i < this.props.timeslots.length; i++) {
                let timeslot = this.props.timeslots[i];

                if (timeslot.id !== "none") {
                    timeslotsArray.push(
                      <button
                        className="restaurant-show-search-timeslot-button"
                        value={timeslot.time}
                        key={timeslot.id}
                        onClick={this.makeReservation(timeslot.id)}
                      >
                        {formatOpeningTime(timeslot.time)}
                      </button>
                    )
                } 
            }

            availableTimeslots = 
              <>
                <h3>Select a time:</h3>
                <div className="restaurant-show-search-timeslot-buttons">

                  {timeslotsArray}
                </div>
              </>
        }

        return availableTimeslots;
    }

    makeReservation(timeslotId) {
        return e => {
            e.preventDefault();
            if (!this.props.currentUser) {
                this.props.openModal('login');
                return;
            }

            this.props.history.push({
                pathname: '/reservations/new',
                search: `restaurantId=${this.state.restaurant_id}&seats=${this.state.seats}&date=${this.state.date}&timeslotId=${timeslotId}&time=${e.target.value}`
            });
        }
    };


    render() {
        return (
          <div className="restaurant-show-search">
            <div className="restaurant-show-search-header">
              <h2>
                <span>Make a reservation</span>
              </h2>
            </div>
            <form
              className="restaurant-show-search-form"
              onSubmit={this.handleSubmit}
            >
              <div className="restaurant-show-search-size">
                <p>Party Size</p>
                <select
                  className="restaurant-show-search-size-selector"
                  value={this.state.seats}
                  onChange={this.update("seats")}
                >
                  {selectNumOfSeatsShow()}
                </select>
              </div>
              <div className="restaurant-show-search-datetime">
                <div className="restaurant-show-search-date">
                  <p>Date</p>
                  <input
                    className="restaurant-show-search-date-selector"
                    type="date"
                    value={this.state.date}
                    min={new Date().toISOString().substr(0, 10)}
                    onChange={this.update("date")}
                    required
                  />
                </div>
                <div className="restaurant-show-search-time">
                  <p>Time</p>
                  <select
                    className="restaurant-show-search-time-selector"
                    value={this.state.time}
                    onChange={this.update("time")}
                  >
                    {selectTimeslots()}
                  </select>
                </div>
              </div>

              <button
                className="restaurant-show-search-submit"
                onClick={this.handleSubmit}
              >
                Find a Dumpster
              </button>
            </form>
            <div className="restaurant-show-search-timeslots">
              {this.displayTimeslots()}
            </div>
          </div>
        );
    }
}

export default RestaurantReservation;