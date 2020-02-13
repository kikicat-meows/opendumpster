import React from 'react';
import { formatOpeningTime } from '../../util/format_time_util'


class BookReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservationForm;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestARestaurant(this.props.reservationForm.restaurant_id)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state)
            .then( res => this.props.history.push(`/reservations/${res.reservation.id}`) );
    }


    render() {
        let renderedComponent;

        if (this.props.restaurant) {
            renderedComponent = 
                <div className='book-reservation-page'>
                    <h2>You're almost done!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        {this.props.restaurant.name}
                        </p>
                        <p>
                            Time: {formatOpeningTime(this.props.time)}
                        </p>
                        <p>
                            Date: {this.props.reservationForm.date}
                        </p>
                        <p>
                            Seats: {this.props.reservationForm.seats}
                        </p>
                        <button onClick={this.handleSubmit}>Complete Reservation</button>
                        <p onClick={() => this.props.history.goBack()}>Cancel</p>
                    </form>
                </div>
        }

        return (
            <>
                {renderedComponent}
            </>
        );
    }
}

export default BookReservationForm;