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
                <div className='book-reservation-page wrapper'>
                    <h2>You're almost done!</h2>

                    <form onSubmit={this.handleSubmit} className='book-reservation-container'>
                        <div className="book-reservation-info">
                            <div className="book-reservation-image">
                                <img src={window.trashcanURL}
                                    alt="placeholder-restaurant-image"
                                    className='restaurant-index-item-img' />     
                            </div>
                            <div className="book-reservation-details">
                                <h3>
                                    {this.props.restaurant.name}
                                </h3>
                                <p>
                                    {formatDate(this.props.reservationForm.date)},&nbsp;
                                    {formatOpeningTime(this.props.time)}
                                </p>
                                <p>
                                    {formatSeat(this.props.reservationForm.seats)}
                                </p>
                            </div>
                        </div>
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