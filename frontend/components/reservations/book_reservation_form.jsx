import React from 'react';
import { 
    formatOpeningTime 
} from '../../util/format_time_util'
import {
    formatDate
} from '../../util/format_date_util';
import {
    formatSeat
} from '../../util/format_seat_util';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

class BookReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservationForm;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.requestARestaurant(this.props.reservationForm.restaurant_id)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.currentUser) {
            this.props.openModal('login');
            return;
        }
        
        this.props.createReservation(this.state)
            .then( res => this.props.history.push(`/reservations/${res.reservation.id}`) );
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.goBack();
        this.props.clearReservationErrors();
    }

    renderErrors() {
      return (
        <ul className="reservation-errors">
          {
            this.props.errors.map((err, i) => (
              <li key={`res-error-${i}`}>
                {err}
              </li>
            ))
          }
        </ul>
      )
    }

    render() {
        let renderedComponent;

        if (this.props.restaurant) {
            renderedComponent = (
              <div className="book-reservation-content wrapper">
                {this.renderErrors()}
                <div className="book-reservation-header">
                  <h2>You're almost done!</h2>
                </div>

                <form
                  onSubmit={this.handleSubmit}
                  className="book-reservation-container"
                >
                  <div className="book-reservation-info">
                    <div className="book-reservation-image">
                      <img
                        src={window.trashcanURL}
                        alt="placeholder-restaurant-image"
                        className="restaurant-index-item-img"
                      />
                    </div>
                    <div className="book-reservation-details">
                      <h3>{this.props.restaurant.name}</h3>
                      <div className="book-reservation-time">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>
                          {formatDate(this.props.reservationForm.date)},&nbsp;
                          {formatOpeningTime(this.props.time)}
                        </p>
                      </div>
                      <div className="book-reservation-time">
                        <FontAwesomeIcon icon={faUser} />
                        <p>{formatSeat(this.props.reservationForm.seats)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="book-reservation-actions">
                    <button onClick={this.handleSubmit}>
                        Complete Reservation
                    </button>
                    <div>
                        <a onClick={this.handleCancel}>Cancel</a>
                    </div>
                  </div>
                  <div className="book-reservation-disclaimer">
                    <p>By clicking "Complete Reservation", you agree to the OpenDumpster Terms of Use and Privacy Policy.</p>
                  </div>
                </form>
              </div>
            );
        }

        return (
            <div className='book-reservation-page'>
                {renderedComponent}
            </div>
        );
    }
}

export default BookReservationForm;