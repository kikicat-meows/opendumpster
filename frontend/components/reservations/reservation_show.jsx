import React from 'react';
import {
    formatOpeningTime
} from '../../util/format_time_util';
import {
    formatDate
} from '../../util/format_date_util';

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

        if (this.props.reservation) {
            renderedComponent = 
                <div className='show-reservation-page'>
                    <div className='show-reservation-header'>
                        <h2>Thanks! Your reservation is confirmed</h2>
                        <h4>Placeholder for Confirmation #</h4>
                    </div>
                    <div className='show-reservation-details'>
                        <div className="show-reservation-image">
                            <img src={window.trashcanURL}
                                alt="placeholder-restaurant-image"
                                className='restaurant-index-item-img' />
                        </div>
                        <h3>
                            {this.props.reservation.restaurant}
                        </h3>
                        <p>
                            {formatDate(this.props.reservation.date)},&nbsp; 
                            {formatOpeningTime(this.props.reservation.time)}
                        </p>
                        <p>
                            {this.props.reservation.seats}
                        </p>
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