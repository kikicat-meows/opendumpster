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
            .then( () => this.props.history.push(`/`) );
    }

    render() {
        let renderedComponent;

        if (this.props.restaurant) {
            renderedComponent = 
                <div className='book-reservation-page'>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        {this.props.restaurant.name}
                    </p>
                        <p>
                            {formatOpeningTime(this.props.time)}
                        </p>
                        <p>
                            Date: {this.props.reservationForm.date}
                        </p>
                        <p>
                            Seats: {this.props.reservationForm.seats}
                        </p>
                        <button onSubmit={this.handleSubmit}>Make Reservation</button>
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