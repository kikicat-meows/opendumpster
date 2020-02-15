import React from 'react';


const ErrorPage = ownProps => (
    <div className="error-page-content">
        <h1>Oops!</h1>
        <h3>We can't seem to find the page you're looking for.</h3>
        <br />
        <h4>Error code: 404</h4>
        <button onClick={()=> ownProps.history.push('/')}>Back to Home ></button>
    </div>

)

export default ErrorPage;