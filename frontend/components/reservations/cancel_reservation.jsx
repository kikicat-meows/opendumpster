import React from 'react';
import { withRouter } from 'react-router-dom';

class CancelReservation extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.currentUser || this.props.currentUser !== this.props.user_id) {
            this.props.closeModal();
        } else {
            this.props.cancelReservation(this.props.id).then(res => {
            this.props.findAReservation(res.reservation.id);
            this.props.closeModal();
            });
        }
    }

    render() {
        return (
          <div className="cancel-modal-content">
            <h3>Are you sure you want to cancel this reservation?</h3>
            <br />
            <br />
            <div className="cancel-confirm-button-container">
              <button
                className="cancel-confirm-button"
                onClick={this.handleSubmit}
              >
                Cancel Reservation
              </button>
            </div>
            <a className="cancel-discard-link" onClick={this.props.closeModal}>
              Keep Reservation
            </a>
          </div>
        );
    }

}

export default withRouter(CancelReservation);