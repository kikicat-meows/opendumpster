import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: (this.props.location.search) ? this.props.location.search.substring(3).split("%20").join(" ") : "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHomepageSubmit = this.handleHomepageSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.searchRestaurants(this.state.searchTerm)
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
        
        setTimeout(() => 
            this.props.searchRestaurants(this.state.searchTerm)
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
                    <h1>Find your table for any occasion</h1>
                    <form onSubmit={this.handleHomepageSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}placeholder="Location, Restaurant, or Cuisine" />
                        <button className='search-button' onClick={this.handleHomepageSubmit}>Find a Dumpster</button>
                    </form>  
                </div>
            )
        } else {
            return (
                <div className='index-search-bar'>
                    <form onSubmit={this.handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}
                            placeholder="Location, Restaurant, or Cuisine" />
                        <button className='search-button' onClick={this.handleSubmit}>Find a Dumpster</button>
                    </form>  
                </div>
            )
        }
    }
}

export default withRouter(SearchForm);