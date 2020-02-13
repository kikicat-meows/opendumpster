import React from 'react';
import {
    formatOpeningTime
} from '../../util/format_time_util';

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
                        <p>Placeholder for Confirmation #</p>
                    </div>
                    <div className='show-reservation-details'>
                        <p>
                            {this.props.reservation.restaurant}
                        </p>
                        <p>
                            Time: {formatOpeningTime(this.props.reservation.time)}
                        </p>
                        <p>
                            Date: {this.props.reservation.date}
                        </p>
                        <p>
                            Seats: {this.props.reservation.seats}
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