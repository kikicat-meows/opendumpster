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
                    <div className='homepage-search-header'>
                        <h1>Find your table for any occasion</h1>
                    </div>
                    <div className='homepage-search-form'>
                        <form onSubmit={this.handleHomepageSubmit}>
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