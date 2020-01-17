import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faUser } from '@fortawesome/free-regular-svg-icons';

import { selectTimeslots, selectNumOfSeats } from '../../util/reservation_search_util';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date().toISOString().substr(0, 10);
        this.state = {
            searchTerm: (this.props.location.search) ? 
                this.props.location.search.substring(3).split("%20").join(" ") : "",
            date: this.props.date,
            time: this.props.time,
            seats: this.props.seats
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHomepageSubmit = this.handleHomepageSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveSearch(this.state);
        this.props.searchRestaurants(this.state)
            .then(() => this.props.history.push({
                pathname: '/restaurants',
                search: `?q=${this.state.searchTerm}`,
            }));
    };

    handleHomepageSubmit(e) {
        e.preventDefault();
        if (this.state.searchTerm === "") {
            this.setState({ searchTerm: 'San Francisco'});
        };
        this.props.receiveSearch(this.state);
        setTimeout(() => 
            this.props.searchRestaurants(this.state)
                .then(() => this.props.history.push({
                    pathname: '/restaurants',
                    search: `?q=${this.state.searchTerm}`
                })
        ), 0)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render () {
        if (this.props.page === 'homepage') {
            return (
                <div className='homepage-search-bar'>
                    <div className='homepage-search-header'>
                        <h1>Find your table for any occasion</h1>
                    </div>
                    <div className='homepage-search-form'>
                        <form onSubmit={this.handleHomepageSubmit}>
                            <span className='homepage-search-calendar'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <input 
                                    type="date"
                                    value={this.state.date}
                                    min={new Date().toISOString().substring(0,10)}
                                    onChange={this.update("date")}
                                    required/>
                            </span>

                            <span className='homepage-search-clock'>
                                <FontAwesomeIcon icon={faClock}/>
                                <select
                                    value={this.state.time}
                                    onChange={this.update("time")}>
                                    {selectTimeslots()}
                                </select>
                            </span>

                            <span className='homepage-search-seats'>
                                <FontAwesomeIcon icon={faUser} />
                                <select
                                    value={this.state.seats}
                                    onChange={this.update("seats")}>
                                    {selectNumOfSeats()}
                                </select>
                            </span>

                            <span className='homepage-search-form-input'>
                                <FontAwesomeIcon icon={faSearch} />
                                <input
                                    type="text"
                                    value={this.state.searchTerm}
                                    onChange={this.update('searchTerm')}placeholder="Location, Restaurant, or Cuisine" />
                            </span>
                            <button className='search-button' onClick={this.handleHomepageSubmit}>Let's go</button>
                        </form>  
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div className='index-search-bar'>
                    <div className='index-search-form'>
                        <form onSubmit={this.handleSubmit}>
                            <span className='index-search-calendar'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <input
                                    type="date"
                                    value={this.state.date}
                                    min={new Date().toISOString().substring(0, 10)}
                                    onChange={this.update("date")}
                                    required />
                            </span>

                            <span className='index-search-clock'>
                                <FontAwesomeIcon icon={faClock} />
                                <select
                                    value={this.state.time}
                                    onChange={this.update("time")}>
                                    {selectTimeslots()}
                                </select>
                            </span>

                            <span className='index-search-seats'>
                                <FontAwesomeIcon icon={faUser} />
                                <select
                                    value={this.state.seats}
                                    onChange={this.update("seats")}>
                                    {selectNumOfSeats()}
                                </select>
                            </span>

                            <span className='index-search-form-input'>
                                <FontAwesomeIcon icon={faSearch} />
                                <input
                                    type="text"
                                    value={this.state.searchTerm}
                                    onChange={this.update('searchTerm')}
                                    placeholder="Location, Restaurant, or Cuisine" />
                            </span>
                            <button className='search-button' onClick={this.handleSubmit}>Find Dumpster</button>
                        </form>  
                    </div>

                </div>
            )
        }
    }
}

export default withRouter(SearchForm);