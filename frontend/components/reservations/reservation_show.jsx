import React from 'react';
import {
    formatOpeningTime
} from '../../util/format_time_util';
import {
    formatDate
} from '../../util/format_date_util';
import {
    formatSeat
} from '../../util/format_seat_util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faUser,
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findAReservation(this.props.match.params.reservationId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.reservationId !== this.props.match.params.reservationId) {
            this.props.findAReservation(this.props.match.params.reservationId);
        }
    }

    displayButtons() {
        if (this.props.reservation && !this.props.reservation.cancellation) {
            return (
              <div className="show-reservation-actions">
                <button className="show-reservations-action-button">
                  Modify
                </button>
                <div>
                  <a
                    className="show-reservation-actions-link"
                    onClick={() =>
                      this.props.openModal([
                        "cancel",
                        this.props.match.params.reservationId,
                        this.props.reservation.user_id
                      ])
                    }
                  >
                    Cancel
                  </a>
                </div>
              </div>
            );
        }
    }

    render() {
        let renderedComponent;
        if (this.props.reservation && !this.props.reservation.cancellation) {
            renderedComponent = (
              <div className="show-reservation-content wrapper">
                <div className="show-reservation-header">
                  <FontAwesomeIcon icon={faCheckCircle}/>&nbsp;
                  <div className="show-reservation-header-right">
                    <h2>Thanks! Your reservation is confirmed.</h2>
                    <h4>Confirmation #{this.props.reservation.confNum}</h4>
                  </div>
                </div>
                <div className="show-reservation-info">
                  <div className="show-reservation-image">
                    <img
                      src={window.trashcanURL}
                      alt="placeholder-restaurant-image"
                      className="restaurant-index-item-img"
                    />
                  </div>
                  <div className="show-reservation-details">
                      <h3>{this.props.reservation.restaurant}</h3>
                    <div className="show-reservation-time">
                      <FontAwesomeIcon icon={faCalendar} />
                      <p>
                        {formatDate(this.props.reservation.date)},&nbsp;
                        {formatOpeningTime(this.props.reservation.time)}
                      </p>
                    </div>
                    <div className="show-reservation-time">
                      <FontAwesomeIcon icon={faUser} />
                      <p>{formatSeat(this.props.reservation.seats)}</p>
                    </div>
                  </div>
                </div>
                  <hr />
                  {this.displayButtons()}
              </div>
            );
        } else if (this.props.reservation && this.props.reservation.cancellation) {
            renderedComponent = (
              <div className="show-reservation-content wrapper">
                <div className="show-reservation-header" id='reservation-cancelled-header'>
                  <FontAwesomeIcon icon={faTimesCircle} />
                  <div className="show-reservation-header-right">
                    <h2>This reservation was cancelled.</h2>
                    <h4>Please contact the restaurant for further assistance.</h4>
                  </div>
                </div>
                <div className="show-reservation-info">
                  <div className="show-reservation-image">
                    <img
                      src={window.trashcanURL}
                      alt="placeholder-restaurant-image"
                      className="restaurant-index-item-img"
                    />
                  </div>
                  <div className="show-reservation-details">
                    <h3>{this.props.reservation.restaurant}</h3>
                    <div className="show-reservation-time">
                      <FontAwesomeIcon icon={faCalendar} />
                      <p>
                        {formatDate(this.props.reservation.date)},&nbsp;
                        {formatOpeningTime(this.props.reservation.time)}
                      </p>
                    </div>
                    <div className="show-reservation-time">
                      <FontAwesomeIcon icon={faUser} />
                      <p>{formatSeat(this.props.reservation.seats)}</p>
                    </div>
                  </div>
                  </div>
                </div>
            );
            
        }

        return (
            <div className='show-reservation-page'>
                {renderedComponent}
            </div>
        );
    }
}

export default ReservationShow;