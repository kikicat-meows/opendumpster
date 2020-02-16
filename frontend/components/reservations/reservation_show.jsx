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

    render() {
        let renderedComponent;
        if (this.props.reservation && !this.props.reservation.cancellation) {
            renderedComponent = 
                <div className='show-reservation-page wrapper'>
                    <div className='show-reservation-header'>
                        <h2>Thanks! Your reservation is confirmed</h2>
                        <h4>Confirmation #{this.props.reservation.confNum}</h4>      
                    </div>
                    <div className='show-reservation-info'>
                        <div className="show-reservation-image">
                            <img src={window.trashcanURL}
                                alt="placeholder-restaurant-image"
                                className='restaurant-index-item-img' />
                        </div>
                        <div className="show-restaurant-details">
                            <h3>
                                {this.props.reservation.restaurant}
                            </h3>
                            <p>
                                {formatDate(this.props.reservation.date)},&nbsp;
                                {formatOpeningTime(this.props.reservation.time)}
                            </p>
                            <p>
                                {formatSeat(this.props.reservation.seats)}
                            </p>
                        </div>

                    </div>
                </div>
        } else if (this.props.reservation && this.props.reservation.cancellation) {
            renderedComponent = 
              <div className="show-reservation-page wrapper">
                <div className="show-reservation-header cancelled">
                  <h2>This reservation was cancelled.</h2>
                  <h4>Please contact the restaurant for further assistance.</h4>
                </div>
                <div className="show-reservation-info">
                  <div className="show-reservation-image">
                    <img
                      src={window.trashcanURL}
                      alt="placeholder-restaurant-image"
                      className="restaurant-index-item-img"
                    />
                  </div>
                  <div className="show-restaurant-details">
                    <h3>{this.props.reservation.restaurant}</h3>
                    <p>
                      {formatDate(this.props.reservation.date)},&nbsp;
                      {formatOpeningTime(this.props.reservation.time)}
                    </p>
                    <p>{formatSeat(this.props.reservation.seats)}</p>
                  </div>
                </div>
              </div>
            
        }

        return (
            <>
                {renderedComponent}
            </>
        );
    }
}

export default ReservationShow;