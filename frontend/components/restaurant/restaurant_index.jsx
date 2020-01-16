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
        this.props.searchRestaurants(keywords);
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
                                        <RestaurantIndexItem restaurant={restaurant} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            } else if (this.props.restaurants && this.props.restaurants.length === 0) {
                indexContainer = 
                <div className='restaurants-index-container clearfix wrapper'>
                    <div className='restaurants-index-content-none'>
                        <h2>Please enter a valid location, restaurant, or cuisine to begin your search.</h2>
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