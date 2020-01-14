import React from 'react';
import { Link } from 'react-router-dom';

import SearchFormContainer from '../search/search_form_container';


const Homepage = () => (
    <div className='homepage'>
        <SearchFormContainer page="homepage"/>
    </div>
);

export default Homepage;