import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantIndexItem from './restaurant_index_item';
import SearchFormContainer from '../search/search_form_container';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        let keywords = this.props.location.search.substring(3).split("%20").join(" ");
        let search = { 
            searchTerm: keywords,
            date: this.props.date,
            time: this.props.time,
            seats: this.props.seats 
        }
        this.props.searchRestaurants(search);
        this.props.clearReservationErrors();
    }


    render () {
        let {restaurants} = this.props;

        let indexContainer;
            if (this.props.restaurants && this.props.restaurants.length > 0) {
                indexContainer = 
                    <div className='restaurants-index-container clearfix wrapper'>
                        <ul>
                            {
                                restaurants.map(restaurant => (
                                    <li key={restaurant.id}>
                                        <RestaurantIndexItem 
                                            currentUser={this.props.currentUser} 
                                            restaurant={restaurant}
                                            openModal={this.props.openModal}
                                            date={this.props.date}
                                            seats={this.props.seats}
                                            // time={this.props.time} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            } else if (this.props.restaurants && this.props.restaurants.length === 0) {
                indexContainer = 
                <div className='restaurants-index-container clearfix wrapper'>
                    <div className='restaurants-index-content-none'>
                        <h2>No restaurant found based on your search criteria.</h2>
                    </div>
                </div>
            }

        return (
            <div className='restaurants-index-page'>
                <SearchFormContainer />

                {indexContainer}
            </div>

        )
    }
}

export default RestaurantIndex;