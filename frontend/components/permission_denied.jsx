import React from "react";

const PermissionDenied = ownProps => (
  <div className="error-page-content wrapper">
    <h1>Warning!</h1>
    <h3>You do not have permission to perform this action.</h3>
    <br />
    <h4>Error code: 500</h4>
    <button onClick={() => ownProps.history.push("/")}>Back to Home ></button>
  </div>
);

export default PermissionDenied;
