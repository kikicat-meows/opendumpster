import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { formatOpeningTime } from '../../util/format_time_util';


class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.makeReservation = this.makeReservation.bind(this);
    }

    timeslotButtons() {
        const availableTimeslots = this.props.restaurant.available_timeslots;
        return availableTimeslots.map (timeslot => 
            <button
                // type='submit'
                className='restaurant-index-item-times-button'
                value={timeslot.time}
                key={timeslot.id}
                onClick={this.makeReservation(timeslot.id)}>
                    {formatOpeningTime(timeslot.time)}
            </button>
            )
    }


    makeReservation(timeslotId) {
        return e => {
            e.preventDefault();
            if (!this.props.currentUser) {
                this.props.openModal('login');
                return;
            }
            this.props.receiveSearch({
                searchTerm: this.props.searchTerm,
                date: this.props.date,
                time: this.props.time,
                seats: this.props.seats,
                restaurant_id: this.props.restaurant.id,
                timeslot_id: timeslotId
            });

            this.props.history.push({
                pathname: '/reservations/new',
                search: `restaurantId=${this.props.restaurant.id}&timeslotId=${timeslotId}&time=${e.target.value}`
            });
        }
    }

    render () {
        let restaurant = this.props.restaurant;

        const cuisines = restaurant.cuisine;
        const link = `/restaurants/${restaurant.id}`;

        return (
            <div className='restaurant-index-item'>
                <Link className='restaurant-index-img-link' to={link}>
                    <img src={window.trashcanURL}
                        alt="placeholder-restaurant-image"
                        className='restaurant-index-item-img' />
                </Link>
                <div className='restaurant-index-item-content'>
                    <div className='restaurant-index-header'>
                        <Link className='restaurant-index-item-link' to={link}>{restaurant.name}</Link>
                    </div>
                    <div className='restaurant-index-item-rating'>
                        Placeholder for Rating
                    </div>
                    <div className='restaurant-index-item-info'>
                        <span>{cuisines[0]}</span>
                        <span className='span-dot'>&#183;</span>
                        <span>{restaurant.city}</span>
                    </div>
                    <div className='restaurant-index-item-times'>
                        {this.timeslotButtons()}
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(RestaurantIndexItem);