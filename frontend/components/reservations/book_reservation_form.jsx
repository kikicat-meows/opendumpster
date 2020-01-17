import React from 'react';



class BookReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservationForm;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state)
            .then( () => this.props.history.push(`/`) );
    }

    render() {
        return (
            <div className='book-reservation-page'>
                <form onSubmit={this.handleSubmit}>
                    {/* <p>
                        {this.props.restaurant.name}
                    </p> */}
                    <p>
                        {this.props.time}
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
        );
    }
}

export default BookReservationForm;